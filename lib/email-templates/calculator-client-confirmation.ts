interface ClientEmailProps {
  name: string;
  email: string;
  projectType: string;
  estimatedCost: number;
  estimatedWeeks: number;
  numberOfPages: number;
  selectedFeatures: string[];
  company?: string;
  message?: string;
}

export function getClientConfirmationEmail(props: ClientEmailProps) {
  const {
    name,
    projectType,
    estimatedCost,
    estimatedWeeks,
    numberOfPages,
    selectedFeatures,
    company,
    message,
  } = props;

  const halfPayment = Math.round(estimatedCost * 0.5);
  const monthlyPayment = Math.round(estimatedCost / 3);
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  const subject = `Your Project Estimate - $${estimatedCost.toLocaleString()} ${projectType}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f3f4f6;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #1e40af 0%, #06b6d4 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 28px;
      font-weight: bold;
    }
    .header p {
      margin: 0;
      font-size: 16px;
      opacity: 0.95;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 16px;
      margin-bottom: 20px;
    }
    .estimate-box {
      background: #f8fafc;
      border-left: 4px solid #1e40af;
      padding: 25px;
      margin: 25px 0;
      border-radius: 8px;
    }
    .estimate-box h2 {
      margin: 0 0 20px 0;
      color: #1e40af;
      font-size: 22px;
    }
    .stats {
      display: flex;
      justify-content: space-around;
      margin: 20px 0;
      padding: 20px;
      background: #e0f2fe;
      border-radius: 8px;
    }
    .stat {
      text-align: center;
    }
    .stat-value {
      font-size: 28px;
      font-weight: bold;
      color: #1e40af;
      margin: 0;
    }
    .stat-label {
      font-size: 13px;
      color: #64748b;
      margin: 5px 0 0 0;
    }
    .detail-row {
      padding: 12px 0;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
    }
    .detail-row:last-child {
      border-bottom: none;
    }
    .detail-label {
      font-weight: 600;
      color: #475569;
    }
    .detail-value {
      color: #1e293b;
    }
    .features-list {
      list-style: none;
      padding: 0;
      margin: 15px 0;
    }
    .features-list li {
      padding: 10px;
      background: #f1f5f9;
      margin: 8px 0;
      border-radius: 6px;
      display: flex;
      align-items: center;
    }
    .features-list li:before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      margin-right: 10px;
      font-size: 18px;
    }
    .payment-box {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 20px;
      margin: 25px 0;
      border-radius: 8px;
    }
    .payment-box h3 {
      margin: 0 0 15px 0;
      color: #92400e;
      font-size: 18px;
    }
    .payment-box ul {
      margin: 0;
      padding-left: 20px;
    }
    .payment-box li {
      margin: 10px 0;
      color: #78350f;
    }
    .payment-highlight {
      font-weight: bold;
      color: #92400e;
      font-size: 16px;
      margin-top: 15px;
    }
    .next-steps {
      background: #f0fdf4;
      border-left: 4px solid #10b981;
      padding: 20px;
      margin: 25px 0;
      border-radius: 8px;
    }
    .next-steps h3 {
      margin: 0 0 15px 0;
      color: #065f46;
      font-size: 18px;
    }
    .next-steps ol {
      margin: 0;
      padding-left: 20px;
    }
    .next-steps li {
      margin: 10px 0;
      color: #064e3b;
    }
    .cta-button {
      display: inline-block;
      background: #1e40af;
      color: white;
      padding: 16px 32px;
      text-decoration: none;
      border-radius: 8px;
      margin: 20px 0;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
    }
    .cta-button:hover {
      background: #1e3a8a;
    }
    .urgency-box {
      background: #fef3c7;
      border: 2px solid #f59e0b;
      padding: 15px;
      margin: 20px 0;
      border-radius: 8px;
      text-align: center;
    }
    .urgency-box strong {
      color: #92400e;
      font-size: 16px;
    }
    .contact-info {
      margin: 25px 0;
      padding: 20px;
      background: #f8fafc;
      border-radius: 8px;
    }
    .contact-info p {
      margin: 8px 0;
    }
    .contact-info a {
      color: #1e40af;
      text-decoration: none;
    }
    .footer {
      background: #1e293b;
      color: #94a3b8;
      text-align: center;
      padding: 30px;
      font-size: 14px;
    }
    .footer p {
      margin: 5px 0;
    }
    .footer a {
      color: #06b6d4;
      text-decoration: none;
      margin: 0 10px;
    }
    .footer a:hover {
      text-decoration: underline;
    }
    @media only screen and (max-width: 600px) {
      .stats {
        flex-direction: column;
      }
      .stat {
        margin: 10px 0;
      }
      .content {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Your Project Estimate</h1>
      <p>Thanks for using our calculator, ${name}!</p>
    </div>
    
    <div class="content">
      <p class="greeting">Hi ${name},</p>
      
      <p>We've received your project estimate request and we're excited to work with you! Here's a summary of your custom configuration:</p>
      
      <div class="estimate-box">
        <h2>${projectType}</h2>
        
        <div class="stats">
          <div class="stat">
            <p class="stat-value">$${estimatedCost.toLocaleString()}</p>
            <p class="stat-label">Estimated Investment</p>
          </div>
          <div class="stat">
            <p class="stat-value">${estimatedWeeks}</p>
            <p class="stat-label">Weeks to Launch</p>
          </div>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Number of Pages:</span>
          <span class="detail-value">${numberOfPages}</span>
        </div>
        
        ${selectedFeatures.length > 0 ? `
        <div style="margin-top: 20px;">
          <p class="detail-label">Selected Features:</p>
          <ul class="features-list">
            ${selectedFeatures.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
        
        ${message ? `
        <div style="margin-top: 20px;">
          <p class="detail-label">Your Notes:</p>
          <p style="background: #f1f5f9; padding: 15px; border-radius: 6px; margin: 10px 0;">${message}</p>
        </div>
        ` : ''}
      </div>
      
      <div class="payment-box">
        <h3>💰 Flexible Payment Options</h3>
        <ul>
          <li><strong>Option 1:</strong> 50% upfront ($${halfPayment.toLocaleString()}), 50% on completion</li>
          <li><strong>Option 2:</strong> 3-month payment plan ($${monthlyPayment.toLocaleString()}/month)</li>
          <li><strong>Option 3:</strong> Custom plan tailored to your budget</li>
        </ul>
        <p class="payment-highlight">💡 Start your project for just $${halfPayment.toLocaleString()}!</p>
      </div>
      
      <div class="next-steps">
        <h3>🚀 What Happens Next?</h3>
        <ol>
          <li><strong>Review:</strong> Our team will review your requirements</li>
          <li><strong>Proposal:</strong> You'll receive a detailed proposal within 24 hours</li>
          <li><strong>Consultation:</strong> We'll schedule a call to discuss specifics</li>
          <li><strong>Launch:</strong> Your project kicks off within days!</li>
        </ol>
      </div>
      
      <div style="text-align: center;">
        <a href="https://calendly.com/zennithdevelopments" class="cta-button">
          📅 Schedule Your Free Consultation
        </a>
      </div>
      
      <div class="urgency-box">
        <strong>⚡ Limited Time Offer:</strong> Book your consultation within 48 hours to secure priority scheduling for ${currentMonth}!
      </div>
      
      <div class="contact-info">
        <p><strong>Have questions? We're here to help!</strong></p>
        <p>📞 Call us: <a href="tel:+18768396403">(876) 839-6403</a></p>
        <p>💬 WhatsApp: <a href="https://wa.me/18768396403">Click to chat</a></p>
        <p>📧 Email: <a href="mailto:zennithdevelopments@gmail.com">zennithdevelopments@gmail.com</a></p>
      </div>
      
      <p>Looking forward to bringing your vision to life!</p>
      
      <p>
        <strong>The Zennith Team</strong><br>
        <em>Transforming Businesses Through Technology</em>
      </p>
    </div>
    
    <div class="footer">
      <p><strong>Zennith Developments</strong> | Kingston, Jamaica</p>
      <p>
        <a href="https://zennithdevelopments.com">Website</a>
        <a href="https://instagram.com/zennithdev">Instagram</a>
        <a href="https://linkedin.com/company/zennith-developments">LinkedIn</a>
      </p>
      <p style="margin-top: 15px; font-size: 12px; color: #64748b;">
        You received this email because you requested a quote from our website calculator.<br>
        If you have any questions, please contact us.
      </p>
    </div>
  </div>
</body>
</html>
  `;

  const text = `
Your Project Estimate - $${estimatedCost.toLocaleString()} ${projectType}

Hi ${name},

Thanks for using our calculator! We're excited to work with you.

Your Custom Estimate:
━━━━━━━━━━━━━━━━━━━━━
Project Type: ${projectType}
Estimated Cost: $${estimatedCost.toLocaleString()} USD
Timeline: ${estimatedWeeks} weeks
Number of Pages: ${numberOfPages}

${selectedFeatures.length > 0 ? `Selected Features:\n${selectedFeatures.map(f => `• ${f}`).join('\n')}` : ''}

${message ? `Your Notes:\n${message}\n` : ''}
━━━━━━━━━━━━━━━━━━━━━

💰 FLEXIBLE PAYMENT OPTIONS:
• 50% upfront ($${halfPayment.toLocaleString()}) + 50% on completion
• 3-month payment plan: $${monthlyPayment.toLocaleString()}/month
• Custom plan tailored to your budget

Start your project for just $${halfPayment.toLocaleString()}!

🚀 WHAT HAPPENS NEXT:
1. Review: Our team will review your requirements
2. Proposal: You'll receive a detailed proposal within 24 hours
3. Consultation: We'll schedule a call to discuss specifics
4. Launch: Your project kicks off within days!

⚡ LIMITED TIME: Book within 48 hours for priority scheduling!

CONTACT US:
📞 Phone: (876) 839-6403
💬 WhatsApp: https://wa.me/18768396403
📧 Email: zennithdevelopments@gmail.com
📅 Book consultation: https://calendly.com/zennithdevelopments

Looking forward to bringing your vision to life!

The Zennith Team
Transforming Businesses Through Technology

---
Zennith Developments | Kingston, Jamaica
Website: https://zennithdevelopments.com
  `;

  return { subject, html, text };
}
