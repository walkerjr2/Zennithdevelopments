interface AdminEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  estimatedCost: number;
  estimatedWeeks: number;
  numberOfPages: number;
  selectedFeatures: string[];
  message?: string;
  submittedAt: string;
  dashboardUrl?: string;
}

export function getAdminNotificationEmail(props: AdminEmailProps) {
  const {
    name,
    email,
    phone,
    company,
    projectType,
    estimatedCost,
    estimatedWeeks,
    numberOfPages,
    selectedFeatures,
    message,
    submittedAt,
    dashboardUrl = 'https://zennithdevelopments.com/admin/dashboard',
  } = props;

  const subject = `🔥 HOT LEAD: Calculator Quote - $${estimatedCost.toLocaleString()} ${projectType}`;

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
      color: #1e293b;
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
      background: linear-gradient(135deg, #dc2626 0%, #f59e0b 100%);
      color: white;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 24px;
      font-weight: bold;
    }
    .alert-badge {
      display: inline-block;
      background: #ffffff;
      color: #dc2626;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 14px;
      margin-top: 10px;
    }
    .content {
      padding: 30px;
    }
    .section {
      background: #f8fafc;
      border-left: 4px solid #dc2626;
      padding: 20px;
      margin: 20px 0;
      border-radius: 6px;
    }
    .section h3 {
      margin: 0 0 15px 0;
      color: #1e293b;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin: 15px 0;
    }
    .info-item {
      background: #ffffff;
      padding: 12px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }
    .info-label {
      font-size: 12px;
      color: #64748b;
      margin: 0 0 5px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .info-value {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
      margin: 0;
    }
    .info-value.highlight {
      color: #dc2626;
      font-size: 20px;
    }
    .contact-card {
      background: #ffffff;
      border: 2px solid #10b981;
      padding: 20px;
      border-radius: 8px;
      margin: 15px 0;
    }
    .contact-row {
      display: flex;
      align-items: center;
      margin: 10px 0;
      padding: 8px 0;
      border-bottom: 1px solid #e2e8f0;
    }
    .contact-row:last-child {
      border-bottom: none;
    }
    .contact-icon {
      margin-right: 12px;
      font-size: 18px;
    }
    .contact-link {
      color: #1e40af;
      text-decoration: none;
      font-weight: 500;
    }
    .contact-link:hover {
      text-decoration: underline;
    }
    .features-list {
      list-style: none;
      padding: 0;
      margin: 15px 0;
    }
    .features-list li {
      padding: 10px;
      background: #ffffff;
      margin: 8px 0;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
    }
    .features-list li:before {
      content: "🔧";
      margin-right: 10px;
      font-size: 16px;
    }
    .message-box {
      background: #fef3c7;
      border: 1px solid #f59e0b;
      padding: 15px;
      border-radius: 6px;
      margin: 15px 0;
    }
    .message-box p {
      margin: 0;
      color: #92400e;
    }
    .action-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin: 25px 0;
    }
    .action-button {
      display: inline-block;
      padding: 14px 20px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
      font-size: 14px;
    }
    .action-button.primary {
      background: #1e40af;
      color: white;
    }
    .action-button.secondary {
      background: #10b981;
      color: white;
    }
    .action-button:hover {
      opacity: 0.9;
    }
    .tips-box {
      background: #e0f2fe;
      border-left: 4px solid #0ea5e9;
      padding: 20px;
      margin: 25px 0;
      border-radius: 6px;
    }
    .tips-box h4 {
      margin: 0 0 15px 0;
      color: #075985;
      font-size: 16px;
    }
    .tips-box ul {
      margin: 0;
      padding-left: 20px;
    }
    .tips-box li {
      margin: 8px 0;
      color: #0c4a6e;
    }
    .urgency {
      background: #fecaca;
      border: 2px solid #dc2626;
      padding: 15px;
      margin: 20px 0;
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
      color: #7f1d1d;
    }
    .footer {
      background: #1e293b;
      color: #94a3b8;
      text-align: center;
      padding: 20px;
      font-size: 12px;
    }
    @media only screen and (max-width: 600px) {
      .info-grid, .action-buttons {
        grid-template-columns: 1fr;
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
      <h1>🔥 NEW CALCULATOR SUBMISSION</h1>
      <p>High-priority lead - immediate action required</p>
      <div class="alert-badge">HOT LEAD 🚨</div>
    </div>
    
    <div class="content">
      <div class="section">
        <h3>👤 Client Information</h3>
        <div class="contact-card">
          <div class="contact-row">
            <span class="contact-icon">👤</span>
            <strong>${name}${company ? ` (${company})` : ''}</strong>
          </div>
          <div class="contact-row">
            <span class="contact-icon">✉️</span>
            <a href="mailto:${email}" class="contact-link">${email}</a>
          </div>
          ${phone ? `
          <div class="contact-row">
            <span class="contact-icon">📱</span>
            <a href="tel:${phone}" class="contact-link">${phone}</a>
          </div>
          ` : ''}
          <div class="contact-row">
            <span class="contact-icon">🕐</span>
            <span style="color: #64748b; font-size: 14px;">Submitted ${submittedAt}</span>
          </div>
        </div>
      </div>
      
      <div class="section">
        <h3>💰 Project Details</h3>
        <div class="info-grid">
          <div class="info-item">
            <p class="info-label">Project Type</p>
            <p class="info-value">${projectType}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Estimated Budget</p>
            <p class="info-value highlight">$${estimatedCost.toLocaleString()}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Timeline</p>
            <p class="info-value">${estimatedWeeks} weeks</p>
          </div>
          <div class="info-item">
            <p class="info-label">Number of Pages</p>
            <p class="info-value">${numberOfPages}</p>
          </div>
        </div>
        
        ${selectedFeatures.length > 0 ? `
        <div style="margin-top: 20px;">
          <p style="font-weight: 600; margin-bottom: 10px; color: #475569;">Selected Features:</p>
          <ul class="features-list">
            ${selectedFeatures.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
        
        ${message ? `
        <div style="margin-top: 20px;">
          <p style="font-weight: 600; margin-bottom: 10px; color: #475569;">Additional Notes:</p>
          <div class="message-box">
            <p>${message}</p>
          </div>
        </div>
        ` : ''}
      </div>
      
      <div class="urgency">
        ⚡ RESPOND WITHIN 4 HOURS FOR BEST CONVERSION RATE
      </div>
      
      <div class="action-buttons">
        <a href="${dashboardUrl}" class="action-button primary">
          📊 View in Dashboard
        </a>
        <a href="mailto:${email}?subject=Re: Your Project Estimate - ${projectType}&body=Hi ${name},%0D%0A%0D%0AThanks for using our calculator! I reviewed your ${projectType} project..." class="action-button secondary">
          📧 Reply to Client
        </a>
      </div>
      
      <div class="tips-box">
        <h4>💡 Quick Response Tips</h4>
        <ul>
          <li><strong>Mention the calculator:</strong> "I saw your ${projectType} calculation..."</li>
          <li><strong>Reference their budget:</strong> "Your estimated investment of $${estimatedCost.toLocaleString()}..."</li>
          <li><strong>Offer flexibility:</strong> "We can adjust the scope to fit your needs..."</li>
          <li><strong>Create urgency:</strong> "I have availability to start next week..."</li>
          <li><strong>Book a call:</strong> Send your Calendly link immediately</li>
        </ul>
      </div>
      
      <div class="section">
        <h3>🎯 Why This Is a Hot Lead</h3>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>✅ Already calculated their budget (${estimatedCost.toLocaleString()})</li>
          <li>✅ Explored features and options (high engagement)</li>
          <li>✅ Provided full contact information</li>
          <li>✅ Ready for next steps (proposal stage)</li>
          <li>✅ Self-qualified and serious about project</li>
        </ul>
      </div>
    </div>
    
    <div class="footer">
      <p>Zennith Developments - Admin Notification System</p>
      <p>This email was automatically generated from a calculator submission</p>
    </div>
  </div>
</body>
</html>
  `;

  const text = `
🔥 HOT LEAD: Calculator Quote - $${estimatedCost.toLocaleString()} ${projectType}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚨 NEW CALCULATOR SUBMISSION - HIGH PRIORITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CLIENT INFORMATION:
Name: ${name}${company ? ` (${company})` : ''}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Submitted: ${submittedAt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 PROJECT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Project Type: ${projectType}
Budget: $${estimatedCost.toLocaleString()}
Timeline: ${estimatedWeeks} weeks
Pages: ${numberOfPages}

${selectedFeatures.length > 0 ? `SELECTED FEATURES:\n${selectedFeatures.map(f => `• ${f}`).join('\n')}\n` : ''}

${message ? `ADDITIONAL NOTES:\n${message}\n` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ NEXT ACTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. [View Full Details] → ${dashboardUrl}
2. [Reply to Client] → ${email}
3. [Call Client] → ${phone || 'No phone provided'}

🎯 WHY THIS IS HOT:
• Client already calculated budget
• Explored features (high engagement)
• Provided full contact info
• Ready for proposal stage
• Self-qualified and serious

⚡ RESPOND WITHIN 4 HOURS FOR BEST CONVERSION

💡 QUICK RESPONSE TIPS:
• Mention their calculator submission
• Reference their $${estimatedCost.toLocaleString()} estimate
• Offer to adjust scope if needed
• Create urgency (availability next week)
• Send Calendly link for quick booking

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Zennith Developments - Admin Notification
This email was automatically generated from a calculator submission.
  `;

  return { subject, html, text };
}
