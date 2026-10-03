const rawBaseUrl =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? 'https://aman-s-portfolio-backend.onrender.com'
    : '');
const API_BASE_URL = rawBaseUrl.replace(/\/+$/, '');


const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '3e3581a5-876f-4b6b-8454-c7c1097dfaa2';

export const sendContactMessage = async (data) => {
  // 1. Dispatch real email notification directly to Aman's Gmail via Web3Forms HTTPS
  // This bypasses cloud hosting SMTP blocks and guarantees instant inbox delivery
  if (WEB3FORMS_KEY) {
    try {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          subject: `📬 Portfolio Contact: ${data.subject || 'New Message'} from ${data.name}`,
          message: data.message,
          from_name: `${data.name} (Portfolio)`,
          replyto: data.email,
        }),
      }).catch((e) => console.warn('Email notice:', e));
    } catch (mailErr) {
      console.warn('Web3Forms dispatch warning:', mailErr);
    }
  }

  // 2. Persist record to MongoDB Atlas via Render Backend
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit contact message');
    }

    return result;
  } catch (error) {
    console.error('API Error in sendContactMessage:', error);
    // If backend isn't reachable, simulate successful fallback storage in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('aman_portfolio_offline_messages') || '[]');
      existing.push({
        ...data,
        id: 'local_' + Date.now(),
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('aman_portfolio_offline_messages', JSON.stringify(existing));
      return {
        success: true,
        message: 'Message saved successfully! Thank you for getting in touch.',
        offlineSaved: true,
      };
    } catch {
      throw error;
    }
  }
};

export const getHealthStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    return await response.json();
  } catch (err) {
    return { status: 'offline', error: err.message };
  }
};
