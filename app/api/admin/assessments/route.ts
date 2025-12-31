import { NextRequest, NextResponse } from 'next/server';
import { getAllAssessments, getFilteredAssessments, getAssessmentStats } from '@/lib/db-hybrid';

// Simple authentication check
function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;
  
  // Simple password check - In production, use proper auth
  const password = process.env.ADMIN_PASSWORD || 'zennith2025';
  const providedPassword = authHeader.replace('Bearer ', '');
  
  return providedPassword === password;
}

export async function GET(request: NextRequest) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    // Get statistics
    if (action === 'stats') {
      const stats = await getAssessmentStats();
      return NextResponse.json(stats);
    }

    // Get filtered assessments
    const filters = {
      status: searchParams.get('status') || undefined,
      priority: searchParams.get('priority') || undefined,
      search: searchParams.get('search') || undefined,
      startDate: searchParams.get('startDate') || undefined,
      endDate: searchParams.get('endDate') || undefined,
    };

    const assessments = await getFilteredAssessments(filters);

    return NextResponse.json(assessments);
  } catch (error) {
    console.error('Error fetching assessments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch assessments' },
      { status: 500 }
    );
  }
}
