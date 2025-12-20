import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...data } = body;

    // Log the submission (in production, save to database)
    console.log('Contact submission:', { type, data, timestamp: new Date().toISOString() });

    // TODO: In production:
    // 1. Save to database
    // 2. Send email notification to team
    // 3. Send confirmation email to user
    // 4. Integrate with CRM (HubSpot, Salesforce, etc.)
    
    // Mock successful response
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
