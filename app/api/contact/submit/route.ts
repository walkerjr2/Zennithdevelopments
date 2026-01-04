import { NextRequest, NextResponse } from 'next/server';
import { createAssessment } from '@/lib/db-hybrid';
import { sendCalculatorEmails } from '@/lib/send-calculator-emails';
import { sendCalculatorEmailsViaEmailJS } from '@/lib/send-calculator-emails-emailjs';
import { sendAssessmentEmails } from '@/lib/send-assessment-emails';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...data } = body;

    // Log the submission
    console.log('Contact submission:', { type, data, timestamp: new Date().toISOString() });

    // Save to database if it's a project assessment, questionnaire, quick contact, or cost calculator
    if (type === 'project-assessment' || type === 'assessment' || type === 'questionnaire' || type === 'quick_contact' || type === 'cost-calculator') {
      try {
        const assessment = await createAssessment({
          clientName: data.name || data.clientName || 'Unknown',
          email: data.email || '',
          phone: data.phone || undefined,
          company: data.company || undefined,
          projectType: data.projectType || data.type || 'General Inquiry',
          budget: type === 'cost-calculator' 
            ? `$${data.estimatedCost?.toLocaleString() || 'Not specified'}` 
            : (data.budget || 'Not specified'),
          timeline: type === 'cost-calculator' 
            ? `${data.estimatedWeeks || 0} weeks` 
            : (data.timeline || 'Not specified'),
          description: type === 'cost-calculator'
            ? `Cost Calculator Submission:\n\nProject: ${data.projectType}\nPages: ${data.numberOfPages}\nFeatures: ${data.selectedFeatures?.join(', ') || 'None'}\n\nAdditional Details: ${data.message || 'None provided'}`
            : (data.description || data.message || ''),
          features: data.selectedFeatures || data.goals || data.features || [],
          currentWebsite: data.currentWebsite || data.website || undefined,
          targetAudience: data.targetAudience || undefined,
          competitors: data.competitors || undefined,
          additionalInfo: type === 'cost-calculator'
            ? `Source: Cost Calculator | Base Price: $${data.basePrice || 0} | Calculation Details: ${JSON.stringify(data.calculationDetails)}`
            : (data.hearAbout ? `How they heard about us: ${data.hearAbout}` : (data.additionalInfo || data.notes || undefined)),
          status: 'new',
          priority: type === 'cost-calculator' ? 'high' : 'medium', // Calculator submissions are high priority
          notes: '',
        });

        console.log('✅ Assessment saved to database:', assessment.id);
      } catch (dbError) {
        console.error('❌ Failed to save to database:', dbError);
        // Continue even if database save fails so user still gets success message
      }
    }

    // Send email notifications
    console.log('🔍 Type:', type);
    console.log('🔍 Sending email notifications...');
    
    if (type === 'cost-calculator') {
      // Calculator submissions - detailed email with estimate
      try {
        console.log('📧 Attempting to send calculator emails...');
        
        const emailResults = await sendCalculatorEmailsViaEmailJS({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          projectType: data.projectType,
          estimatedCost: data.estimatedCost,
          estimatedWeeks: data.estimatedWeeks,
          numberOfPages: data.numberOfPages,
          selectedFeatures: data.selectedFeatures || [],
          message: data.message,
        });

        console.log('📧 Calculator email results:', emailResults);
        
        if (!emailResults.clientEmail.success) {
          console.warn('⚠️ Client email failed:', emailResults.clientEmail.error);
        }
        if (!emailResults.adminEmail.success) {
          console.warn('⚠️ Admin email failed:', emailResults.adminEmail.error);
        }
      } catch (emailError) {
        console.error('❌ Failed to send calculator emails:', emailError);
        // Don't fail the request if emails fail - user already submitted successfully
      }
    } else if (type === 'project-assessment' || type === 'assessment' || type === 'questionnaire' || type === 'quick_contact') {
      // Project assessment submissions - simpler email
      try {
        console.log('📧 Attempting to send assessment emails...');
        
        const emailResults = await sendAssessmentEmails({
          name: data.name || data.clientName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          projectType: data.projectType || data.type || 'Quick Contact Inquiry',
          budget: data.budget,
          timeline: data.timeline,
          description: data.description || data.message,
          features: data.goals || data.features,
          currentWebsite: data.currentWebsite || data.website,
          hearAbout: data.hearAbout,
          service: data.service,
          tier: data.tier,
          price: data.price,
        });

        console.log('📧 Assessment email results:', emailResults);
        
        if (!emailResults.clientEmail.success) {
          console.warn('⚠️ Client email failed:', emailResults.clientEmail.error);
        }
        if (!emailResults.adminEmail.success) {
          console.warn('⚠️ Admin email failed:', emailResults.adminEmail.error);
        }
      } catch (emailError) {
        console.error('❌ Failed to send assessment emails:', emailError);
        // Don't fail the request if emails fail - user already submitted successfully
      }
    }
    
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again or email us directly.',
      },
      { status: 500 }
    );
  }
}
