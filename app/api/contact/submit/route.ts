import { NextRequest, NextResponse } from 'next/server';
import { createAssessment } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...data } = body;

    // Log the submission
    console.log('Contact submission:', { type, data, timestamp: new Date().toISOString() });

    // Save to database if it's a project assessment or questionnaire
    if (type === 'project-assessment' || type === 'assessment' || type === 'questionnaire') {
      try {
        const assessment = await createAssessment({
          clientName: data.name || data.clientName || 'Unknown',
          email: data.email || '',
          phone: data.phone || undefined,
          company: data.company || undefined,
          projectType: data.projectType || data.type || 'General Inquiry',
          budget: data.budget || 'Not specified',
          timeline: data.timeline || 'Not specified',
          description: data.description || data.message || '',
          features: data.goals || data.features || [], // 'goals' is what questionnaire uses
          currentWebsite: data.currentWebsite || data.website || undefined,
          targetAudience: data.targetAudience || undefined,
          competitors: data.competitors || undefined,
          additionalInfo: data.hearAbout ? `How they heard about us: ${data.hearAbout}` : (data.additionalInfo || data.notes || undefined),
          status: 'new',
          priority: 'medium',
          notes: '',
        });

        console.log('✅ Assessment saved to database:', assessment.id);
      } catch (dbError) {
        console.error('❌ Failed to save to database:', dbError);
        // Continue even if database save fails so user still gets success message
      }
    }

    // TODO: Send email notifications
    // const emailResult = await sendNotificationEmail(data);
    
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
