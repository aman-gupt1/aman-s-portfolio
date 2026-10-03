import dns from 'dns';
import nodemailer from 'nodemailer';

if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

/**
 * Sends an email notification to Aman's Gmail whenever someone submits the contact form.
 * Safe fallback: If credentials are not configured or email fails, it logs a warning
 * without crashing or failing the database save.
 */
export const sendContactNotification = async ({ name, email, subject, message }) => {
  // Option 1: Web3Forms HTTPS API (Port 443 - 100% reliable on Render Free Tier, never blocked!)
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  if (web3Key && web3Key.trim()) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3Key.trim(),
          name,
          email,
          subject: `📬 Portfolio Contact: ${subject || 'New Message'} from ${name}`,
          message: `${message}\n\n---\nSent from Aman Gupta Portfolio Contact Form`,
          from_name: `${name} (Portfolio)`,
          replyto: email,
        }),
      });
      const data = await response.json();
      if (data.success) {
        console.log('✅ Email notification dispatched via Web3Forms HTTPS API!');
        return { sent: true, provider: 'web3forms' };
      }
      console.warn('⚠️ Web3Forms responded with error:', data.message);
    } catch (apiErr) {
      console.error('Web3Forms dispatch error:', apiErr.message);
    }
  }

  // Option 2: Resend API (HTTPS Port 443)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey && resendKey.trim()) {
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey.trim()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['amangupta276302@gmail.com'],
          reply_to: email,
          subject: `📬 Portfolio Contact: ${subject || 'New Message'} from ${name}`,
          html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Subject:</strong> ${subject}</p><p>${message}</p>`,
        }),
      });
      const resendData = await resendRes.json();
      if (resendRes.ok) {
        console.log('✅ Email notification dispatched via Resend HTTPS API!');
        return { sent: true, provider: 'resend', id: resendData.id };
      }
      console.warn('⚠️ Resend responded with error:', resendData.message);
    } catch (resendErr) {
      console.error('Resend dispatch error:', resendErr.message);
    }
  }

  // Option 3: Nodemailer Gmail SMTP (Direct IPv4 Port 587)
  const emailUser = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : '';
  const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '').trim() : '';
  const receiverEmail = (process.env.RECEIVER_EMAIL ? process.env.RECEIVER_EMAIL.trim() : '') || emailUser || 'amangupta276302@gmail.com';

  if (!emailUser || !emailPass) {
    console.warn(
      '⚠️ [Email Service] EMAIL_USER or EMAIL_PASS not configured. Email dispatch skipped. (Message safely preserved in database).'
    );
    return { sent: false, reason: 'Credentials not set' };
  }
  try {
    // Directly resolve IPv4 address to completely bypass Render's disabled IPv6 routing
    let smtpHost = 'smtp.gmail.com';
    try {
      const ipv4List = await dns.promises.resolve4('smtp.gmail.com');
      if (ipv4List && ipv4List.length > 0) {
        smtpHost = ipv4List[0];
      }
    } catch (dnsErr) {
      console.warn('DNS IPv4 resolution fallback:', dnsErr.message);
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: emailUser,
        pass: emailPass, // Google 16-character App Password (spaces stripped)
      },
      tls: {
        rejectUnauthorized: false,
        servername: 'smtp.gmail.com',
      },
    });

    const formattedTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const mailOptions = {
      from: `"Aman Portfolio" <${emailUser}>`,
      to: receiverEmail,
      replyTo: email, // Directly reply to the sender from Gmail!
      subject: `📬 Portfolio Contact: ${subject || 'New Message'} from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
          <div style="border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #1d4ed8; font-size: 20px; font-weight: 700;">
              ✨ New Message from Portfolio Contact Form
            </h2>
            <p style="margin: 4px 0 0 0; color: #64748b; font-size: 13px;">
              Received on: ${formattedTime}
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 90px; vertical-align: top;"><strong>From:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; font-size: 14px;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${subject || 'Portfolio Inquiry'}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; font-weight: 700; color: #475569; letter-spacing: 0.5px;">Message:</p>
            <div style="font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; color: #64748b; font-size: 12px;">
            <p style="margin: 0 0 6px 0;">
              💡 <em>To reply to this person, simply click <strong>"Reply"</strong> in Gmail!</em>
            </p>
            <p style="margin: 0; color: #94a3b8;">
              Aman Gupta Portfolio &bull; MERN Stack
            </p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email notification dispatched successfully. Message ID:', info.messageId);
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error('❌ Failed to dispatch email notification via Nodemailer:', err.message);
    return { sent: false, error: err.message };
  }
};
