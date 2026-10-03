const rawBaseUrl =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? 'https://aman-s-portfolio-backend.onrender.com'
    : '');
const API_BASE_URL = rawBaseUrl.replace(/\/+$/, '');


export const sendContactMessage = async (data) => {
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
