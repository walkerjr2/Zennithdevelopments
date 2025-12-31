// Smart database adapter that uses KV in production, file system in development
import { v4 as uuidv4 } from 'uuid';

export interface ProjectAssessment {
  id: string;
  clientName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  features?: string[];
  currentWebsite?: string;
  targetAudience?: string;
  competitors?: string;
  additionalInfo?: string;
  status: 'new' | 'contacted' | 'in-progress' | 'proposal-sent' | 'won' | 'lost';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Detect environment
const isProduction = process.env.VERCEL_ENV === 'production' || process.env.KV_REST_API_URL;

// Dynamically import the correct database implementation
async function getDB() {
  if (isProduction) {
    // Use Vercel KV in production
    return await import('./db-vercel');
  } else {
    // Use file system in development
    return await import('./db');
  }
}

// Wrapper functions that work in both environments
export async function getAllAssessments(): Promise<ProjectAssessment[]> {
  const db = await getDB();
  return await db.getAllAssessments();
}

export async function getAssessmentById(id: string): Promise<ProjectAssessment | null> {
  const db = await getDB();
  return await db.getAssessmentById(id);
}

export async function createAssessment(data: Omit<ProjectAssessment, 'id' | 'createdAt' | 'updatedAt'>): Promise<ProjectAssessment> {
  const db = await getDB();
  return await db.createAssessment(data);
}

export async function updateAssessment(id: string, updates: Partial<ProjectAssessment>): Promise<ProjectAssessment | null> {
  const db = await getDB();
  return await db.updateAssessment(id, updates);
}

export async function deleteAssessment(id: string): Promise<boolean> {
  const db = await getDB();
  return await db.deleteAssessment(id);
}

export async function getFilteredAssessments(filters: {
  status?: string;
  priority?: string;
  search?: string;
  startDate?: string;
  endDate?: string;
}): Promise<ProjectAssessment[]> {
  const db = await getDB();
  return await db.getFilteredAssessments(filters);
}

export async function getAssessmentStats() {
  const db = await getDB();
  return await db.getAssessmentStats();
}
