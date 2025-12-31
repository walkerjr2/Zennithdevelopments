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

// Detect environment and choose the right database
function getDBType() {
  // Check for standard Redis URL (Redis Labs, Upstash, etc.)
  if (process.env.KV_URL || process.env.REDIS_URL) {
    return 'redis';
  }
  // Check for Vercel KV (REST API based)
  if (process.env.KV_REST_API_URL) {
    return 'vercel-kv';
  }
  // Default to file system for local development
  return 'filesystem';
}

// Dynamically import the correct database implementation
async function getDB() {
  const dbType = getDBType();
  
  switch (dbType) {
    case 'redis':
      // Use standard Redis client (works with Redis Labs, Upstash, etc.)
      return await import('./db-redis');
    case 'vercel-kv':
      // Use Vercel KV (REST API based)
      return await import('./db-vercel');
    default:
      // Use file system for local development
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
