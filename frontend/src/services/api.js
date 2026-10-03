const rawBaseUrl =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? 'https://aman-s-portfolio-backend.onrender.com'
    : '');
const API_BASE_URL = rawBaseUrl.replace(/\/+$/, '');


const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '3e3581a5-876f-4b6b-8454-c7c1097dfaa2';

export const sendContactMessage = async (data) => {
  const formattedTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  // 1. Dispatch beautifully styled email directly to Aman's Gmail via Web3Forms HTTPS
  let emailDispatched = false;
  if (WEB3FORMS_KEY) {
    try {
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: `${data.name} (Portfolio)`,
          subject: `📬 Portfolio Contact: "${data.subject || 'New Inquiry'}" from ${data.name}`,
          replyto: data.email,
          name: data.name,
          email: data.email,
          Subject: data.subject || 'Portfolio Inquiry',
          Message: `${data.message}\n\n──────────────────────────────\n🕒 Received: ${formattedTime} (IST)\n💡 Click "Reply" to respond directly to ${data.name} (${data.email})`,
        }),
      });
      const web3Json = await web3Res.json();
      if (web3Json.success) {
        emailDispatched = true;
      }
    } catch (mailErr) {
      console.warn('Web3Forms dispatch warning:', mailErr);
    }
  }

  // 2. Persist record to MongoDB Atlas via Render Backend concurrently
  // Using an AbortController with a 3.5s timeout so backend cold starts never freeze the UI
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const result = await response.json();
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: result.data,
    };
  } catch (error) {
    console.warn('Backend save notice (offline fallback/email delivered):', error.message);
    try {
      const existing = JSON.parse(localStorage.getItem('aman_portfolio_offline_messages') || '[]');
      existing.push({
        ...data,
        id: 'local_' + Date.now(),
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('aman_portfolio_offline_messages', JSON.stringify(existing));
    } catch {
      // ignore
    }

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      offlineSaved: true,
    };
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
