import { resend, DEFAULT_FROM_EMAIL, ADMIN_EMAIL } from './resend';
import { getClientConfirmationEmail } from './email-templates/calculator-client-confirmation';
import { getAdminNotificationEmail } from './email-templates/calculator-admin-notification';

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

export async function sendCalculatorEmails(data: CalculatorEmailData) {
  const results = {
    clientEmail: { success: false, error: null as string | null },
    adminEmail: { success: false, error: null as string | null },
  };

  console.log('📧 Starting to send emails for:', data.email);
  console.log('📧 Using FROM email:', DEFAULT_FROM_EMAIL);
  console.log('📧 Admin email will go to:', ADMIN_EMAIL);

  // Format the timestamp
  const now = new Date();
  const submittedAt = now.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  try {
    console.log('📤 Preparing client confirmation email...');
    
    // Send confirmation email to client
    const clientEmailContent = getClientConfirmationEmail({
      name: data.name,
      email: data.email,
      projectType: data.projectType,
      estimatedCost: data.estimatedCost,
      estimatedWeeks: data.estimatedWeeks,
      numberOfPages: data.numberOfPages,
      selectedFeatures: data.selectedFeatures,
      company: data.company,
      message: data.message,
    });

    console.log('📤 Sending client email to:', data.email);
    console.log('📤 Subject:', clientEmailContent.subject);

    const clientEmailResult = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: data.email,
      subject: clientEmailContent.subject,
      html: clientEmailContent.html,
      text: clientEmailContent.text,
    });

    if (clientEmailResult.error) {
      console.error('❌ Failed to send client email:', clientEmailResult.error);
      results.clientEmail.error = clientEmailResult.error.message;
    } else {
      console.log('✅ Client email sent successfully!');
      console.log('✅ Email ID:', clientEmailResult.data?.id);
      results.clientEmail.success = true;
    }
  } catch (error) {
    console.error('❌ Error sending client email:', error);
    results.clientEmail.error = error instanceof Error ? error.message : 'Unknown error';
  }

  try {
    console.log('📤 Preparing admin notification email...');
    
    // Send notification email to admin
    const adminEmailContent = getAdminNotificationEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      projectType: data.projectType,
      estimatedCost: data.estimatedCost,
      estimatedWeeks: data.estimatedWeeks,
      numberOfPages: data.numberOfPages,
      selectedFeatures: data.selectedFeatures,
      message: data.message,
      submittedAt,
      dashboardUrl: process.env.NEXT_PUBLIC_SITE_URL 
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/admin/dashboard`
        : 'https://zennithdevelopments.com/admin/dashboard',
    });

    console.log('📤 Sending admin email to:', ADMIN_EMAIL);
    console.log('📤 Subject:', adminEmailContent.subject);

    const adminEmailResult = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: adminEmailContent.subject,
      html: adminEmailContent.html,
      text: adminEmailContent.text,
    });

    if (adminEmailResult.error) {
      console.error('❌ Failed to send admin email:', adminEmailResult.error);
      results.adminEmail.error = adminEmailResult.error.message;
    } else {
      console.log('✅ Admin email sent successfully!');
      console.log('✅ Email ID:', adminEmailResult.data?.id);
      results.adminEmail.success = true;
    }
  } catch (error) {
    console.error('❌ Error sending admin email:', error);
    results.adminEmail.error = error instanceof Error ? error.message : 'Unknown error';
  }

  console.log('📧 Final email results:', results);
  return results;
}
