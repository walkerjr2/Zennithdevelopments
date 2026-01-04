// Assessment email notifications (for project assessments, questionnaires, etc.)
interface AssessmentEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  description?: string;
  message?: string;
  features?: string[];
  currentWebsite?: string;
  hearAbout?: string;
  service?: string;
  tier?: string;
  price?: string;
}

export async function sendAssessmentEmails(data: AssessmentEmailData) {
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

  console.log('📧 Starting assessment email sending...');
  console.log('📧 FROM:', fromEmail);
  console.log('📧 TO (client):', data.email);
  console.log('📧 TO (admin):', adminEmail);

  const featuresText = data.features && data.features.length > 0
    ? data.features.map(f => `• ${f}`).join('\n')
    : 'No specific features mentioned';

  // Client confirmation email
  const clientHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Thank You for Your Project Assessment!</h2>
      <p>Hi ${data.name},</p>
      <p>Thank you for submitting your project assessment! We've received your inquiry and are excited to learn more about your project.</p>
      
      ${data.tier && data.service ? `
      <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
        <h3 style="margin: 0 0 10px 0; color: white;">🎯 Selected Service Package</h3>
        <p style="font-size: 24px; font-weight: bold; margin: 5px 0;">${data.tier}</p>
        <p style="font-size: 16px; margin: 5px 0;">${data.service}</p>
        ${data.price ? `<p style="font-size: 20px; margin: 10px 0;">${data.price}</p>` : ''}
      </div>
      ` : ''}
      
      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Your Submission Summary</h3>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
        ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
      </div>

      ${data.features && data.features.length > 0 ? `
      <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Project Goals</h3>
        <pre style="white-space: pre-wrap; margin: 0;">${featuresText}</pre>
      </div>
      ` : ''}

      ${data.description ? `
      <p><strong>Your Message:</strong><br>${data.description}</p>
      ` : ''}

      <div style="margin: 30px 0; text-align: center;">
        <a href="https://zennithdevelopments.com" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Visit Our Website</a>
      </div>

      <p style="color: #666; font-size: 14px;">We'll review your assessment and get back to you within 24 hours with next steps!</p>
      <p style="color: #666; font-size: 14px;">Best regards,<br>Zennith Developments Team</p>
    </div>
  `;

  // Admin notification email
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #dc2626; color: white; padding: 15px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">📋 NEW PROJECT ASSESSMENT</h2>
      </div>
      
      <div style="border: 2px solid #dc2626; padding: 20px; border-radius: 0 0 8px 8px;">
        ${data.tier && data.service ? `
        <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 20px; border-radius: 8px; margin: 0 0 20px 0; text-align: center;">
          <h3 style="margin: 0 0 10px 0; color: white;">🎯 SELECTED PACKAGE</h3>
          <p style="font-size: 24px; font-weight: bold; margin: 5px 0;">${data.tier}</p>
          <p style="font-size: 16px; margin: 5px 0;">${data.service}</p>
          ${data.price ? `<p style="font-size: 20px; margin: 10px 0; font-weight: bold;">${data.price}</p>` : ''}
        </div>
        ` : ''}

        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        ${data.hearAbout ? `<p><strong>How they heard about us:</strong> ${data.hearAbout}</p>` : ''}

        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">

        <h3>Project Details</h3>
        <p><strong>Type:</strong> ${data.projectType}</p>
        ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
        ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
        ${data.currentWebsite ? `<p><strong>Current Website:</strong> ${data.currentWebsite}</p>` : ''}

        ${data.features && data.features.length > 0 ? `
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
        <h3>Project Goals</h3>
        <pre style="white-space: pre-wrap; background: #f3f4f6; padding: 10px; border-radius: 4px;">${featuresText}</pre>
        ` : ''}

        ${data.description || data.message ? `
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
        <h3>Client Message</h3>
        <p style="background: #f3f4f6; padding: 15px; border-radius: 4px;">${data.description || data.message}</p>
        ` : ''}

        <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 4px;">
          <p style="margin: 0;"><strong>⚡ Action Required:</strong> Respond within 24 hours!</p>
        </div>
      </div>
    </div>
  `;

  // Send admin notification email
  try {
    console.log('📤 Sending admin assessment notification email...');
    
    // Build subject line with tier info if available
    let subject = '📋 NEW Project Assessment';
    if (data.tier) {
      subject += ` - ${data.tier}`;
      if (data.price) {
        subject += ` (${data.price})`;
      }
    } else {
      subject += ` - ${data.projectType}`;
      if (data.budget) {
        subject += ` (${data.budget})`;
      }
    }
    
    const adminResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: adminEmail,
        subject: subject,
        html: adminHtml,
      }),
    });

    const adminData = await adminResponse.json();

    if (adminResponse.ok) {
      console.log('✅ Admin assessment email sent successfully!');
      console.log('✅ Email ID:', adminData.id);
      results.adminEmail.success = true;
    } else {
      console.error('❌ Admin assessment email failed:', adminData);
      results.adminEmail.error = adminData.message || 'Failed to send';
    }
  } catch (error) {
    console.error('❌ Error sending admin assessment email:', error);
    results.adminEmail.error = error instanceof Error ? error.message : 'Unknown error';
  }

  // Send client confirmation email
  try {
    console.log('📤 Sending client assessment confirmation email...');
    
    const clientResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: data.email,
        subject: `Thank You for Your Project Assessment - ${data.projectType}`,
        html: clientHtml,
      }),
    });

    const clientData = await clientResponse.json();

    if (clientResponse.ok) {
      console.log('✅ Client assessment email sent successfully!');
      console.log('✅ Email ID:', clientData.id);
      results.clientEmail.success = true;
    } else {
      console.error('❌ Client assessment email failed:', clientData);
      results.clientEmail.error = clientData.message || 'Failed to send';
    }
  } catch (error) {
    console.error('❌ Error sending client assessment email:', error);
    results.clientEmail.error = error instanceof Error ? error.message : 'Unknown error';
  }

  console.log('📧 Assessment email results:', results);
  return results;
}
