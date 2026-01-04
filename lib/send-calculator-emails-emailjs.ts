// Using Resend REST API directly with fetch - no SDK needed
interface CalculatorEmailData {
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
}

export async function sendCalculatorEmailsViaEmailJS(data: CalculatorEmailData) {
  const results = {
    clientEmail: { success: false, error: null as string | null },
    adminEmail: { success: false, error: null as string | null },
  };

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const adminEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'zennithdevelopments@gmail.com';

  if (!resendApiKey) {
    console.error('❌ RESEND_API_KEY missing in environment variables');
    return results;
  }

  console.log('📧 Starting email sending with Resend REST API...');
  console.log('📧 FROM:', fromEmail);
  console.log('📧 TO (client):', data.email);
  console.log('📧 TO (admin):', adminEmail);
  console.log('📧 Sending to client:', data.email);
  console.log('📧 Admin email:', adminEmail);

  const halfPayment = Math.round(data.estimatedCost * 0.5);
  const monthlyPayment = Math.round(data.estimatedCost / 3);
  const featuresText = data.selectedFeatures.length > 0 
    ? data.selectedFeatures.map(f => `• ${f}`).join('\n') 
    : '• No additional features selected';

  // Simple HTML email for client
  const clientHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Thank You for Your Project Inquiry!</h2>
      <p>Hi ${data.name},</p>
      <p>Thank you for using our project calculator! Here's your custom estimate:</p>
      
      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Project Details</h3>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Number of Pages:</strong> ${data.numberOfPages}</p>
        <p><strong>Selected Features:</strong></p>
        <pre style="white-space: pre-wrap;">${featuresText}</pre>
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
        <h3 style="color: #2563eb;">Estimated Investment: $${data.estimatedCost.toLocaleString()}</h3>
        <p><strong>Estimated Timeline:</strong> ${data.estimatedWeeks} weeks</p>
      </div>

      <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Flexible Payment Options</h3>
        <p>💳 <strong>50% to start, 50% on completion:</strong> $${halfPayment.toLocaleString()} upfront</p>
        <p>📅 <strong>Monthly payments (3 months):</strong> $${monthlyPayment.toLocaleString()}/month</p>
      </div>

      <p><strong>Your Message:</strong><br>${data.message || 'No additional notes'}</p>

      <div style="margin: 30px 0; text-align: center;">
        <a href="https://zennithdevelopments.com" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Visit Our Website</a>
      </div>

      <p style="color: #666; font-size: 14px;">We'll review your inquiry and get back to you within 24 hours!</p>
      <p style="color: #666; font-size: 14px;">Best regards,<br>Zennith Developments Team</p>
    </div>
  `;

  // Simple HTML email for admin
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #dc2626; color: white; padding: 15px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">🔥 NEW CALCULATOR INQUIRY - HIGH PRIORITY</h2>
      </div>
      
      <div style="border: 2px solid #dc2626; padding: 20px; border-radius: 0 0 8px 8px;">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>

        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">

        <h3>Project Details</h3>
        <p><strong>Type:</strong> ${data.projectType}</p>
        <p><strong>Pages:</strong> ${data.numberOfPages}</p>
        <p><strong>Features:</strong></p>
        <pre style="white-space: pre-wrap; background: #f3f4f6; padding: 10px; border-radius: 4px;">${featuresText}</pre>

        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">

        <h3 style="color: #2563eb;">Estimate: $${data.estimatedCost.toLocaleString()}</h3>
        <p><strong>Timeline:</strong> ${data.estimatedWeeks} weeks</p>

        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">

        <h3>Client Message</h3>
        <p style="background: #f3f4f6; padding: 15px; border-radius: 4px;">${data.message || 'No message provided'}</p>

        <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 4px;">
          <p style="margin: 0;"><strong>⚡ Action Required:</strong> Respond within 24 hours!</p>
        </div>
      </div>
    </div>
  `;

  // Send admin notification email (will work immediately)
  try {
    console.log('📤 Sending admin notification email...');
    
    const adminResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: adminEmail,
        subject: `🔥 NEW Calculator Inquiry - ${data.projectType} ($${data.estimatedCost.toLocaleString()})`,
        html: adminHtml,
      }),
    });

    const adminData = await adminResponse.json();

    if (adminResponse.ok) {
      console.log('✅ Admin email sent successfully!');
      console.log('✅ Email ID:', adminData.id);
      results.adminEmail.success = true;
    } else {
      console.error('❌ Admin email failed:', adminData);
      results.adminEmail.error = adminData.message || 'Failed to send';
    }
  } catch (error) {
    console.error('❌ Error sending admin email:', error);
    results.adminEmail.error = error instanceof Error ? error.message : 'Unknown error';
  }

  // Send client confirmation email (will work after domain verification)
  try {
    console.log('📤 Sending client confirmation email...');
    
    const clientResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: data.email,
        subject: `Your Project Estimate: ${data.projectType} - $${data.estimatedCost.toLocaleString()}`,
        html: clientHtml,
      }),
    });

    const clientData = await clientResponse.json();

    if (clientResponse.ok) {
      console.log('✅ Client email sent successfully!');
      console.log('✅ Email ID:', clientData.id);
      results.clientEmail.success = true;
    } else {
      console.error('❌ Client email failed:', clientData);
      results.clientEmail.error = clientData.message || 'Failed to send';
      
      // If it's the testing limitation, explain it
      if (clientData.message?.includes('testing emails')) {
        console.log('ℹ️ Client email blocked: Resend testing limitation');
        console.log('ℹ️ Admin email works (sent to signup email)');
        console.log('ℹ️ To send to any email, verify your domain at https://resend.com/domains');
      }
    }
  } catch (error) {
    console.error('❌ Error sending client email:', error);
    results.clientEmail.error = error instanceof Error ? error.message : 'Unknown error';
  }

  console.log('📧 EmailJS results:', results);
  return results;
}
