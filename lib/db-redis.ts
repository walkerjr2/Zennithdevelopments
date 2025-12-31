// Redis-based database for project assessments
// Works with standard Redis (Redis Labs, Upstash, etc.)

import { createClient } from 'redis';
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

const ASSESSMENTS_KEY = 'assessments:list';

// Create Redis client
let client: ReturnType<typeof createClient> | null = null;

async function getRedisClient() {
  if (!client) {
    client = createClient({
      url: process.env.KV_URL || process.env.REDIS_URL,
    });

    client.on('error', (err) => console.error('Redis Client Error', err));
    
    await client.connect();
  }
  return client;
}

// Get all assessments
export async function getAllAssessments(): Promise<ProjectAssessment[]> {
  try {
    const redis = await getRedisClient();
    const data = await redis.get(ASSESSMENTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting assessments:', error);
    return [];
  }
}

// Get assessment by ID
export async function getAssessmentById(id: string): Promise<ProjectAssessment | null> {
  const assessments = await getAllAssessments();
  return assessments.find(a => a.id === id) || null;
}

// Create new assessment
export async function createAssessment(data: Omit<ProjectAssessment, 'id' | 'createdAt' | 'updatedAt'>): Promise<ProjectAssessment> {
  const assessment: ProjectAssessment = {
    ...data,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const assessments = await getAllAssessments();
  assessments.push(assessment);
  
  const redis = await getRedisClient();
  await redis.set(ASSESSMENTS_KEY, JSON.stringify(assessments));

  return assessment;
}

// Update assessment
export async function updateAssessment(id: string, updates: Partial<ProjectAssessment>): Promise<ProjectAssessment | null> {
  const assessments = await getAllAssessments();
  const index = assessments.findIndex(a => a.id === id);

  if (index === -1) return null;

  assessments[index] = {
    ...assessments[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  const redis = await getRedisClient();
  await redis.set(ASSESSMENTS_KEY, JSON.stringify(assessments));

  return assessments[index];
}

// Delete assessment
export async function deleteAssessment(id: string): Promise<boolean> {
  const assessments = await getAllAssessments();
  const filteredAssessments = assessments.filter(a => a.id !== id);

  if (filteredAssessments.length === assessments.length) {
    return false; // Assessment not found
  }

  const redis = await getRedisClient();
  await redis.set(ASSESSMENTS_KEY, JSON.stringify(filteredAssessments));

  return true;
}

// Get filtered assessments
export async function getFilteredAssessments(filters: {
  status?: string;
  priority?: string;
  search?: string;
}): Promise<ProjectAssessment[]> {
  let assessments = await getAllAssessments();

  if (filters.status) {
    assessments = assessments.filter(a => a.status === filters.status);
  }

  if (filters.priority) {
    assessments = assessments.filter(a => a.priority === filters.priority);
  }

  if (filters.search) {
    const search = filters.search.toLowerCase();
    assessments = assessments.filter(a =>
      a.clientName.toLowerCase().includes(search) ||
      a.email.toLowerCase().includes(search) ||
      a.company?.toLowerCase().includes(search) ||
      a.projectType.toLowerCase().includes(search)
    );
  }

  // Sort by creation date (newest first)
  return assessments.sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

// Get assessment statistics
export async function getAssessmentStats() {
  const assessments = await getAllAssessments();

  const stats = {
    total: assessments.length,
    byStatus: {
      new: assessments.filter(a => a.status === 'new').length,
      contacted: assessments.filter(a => a.status === 'contacted').length,
      inProgress: assessments.filter(a => a.status === 'in-progress').length,
      proposalSent: assessments.filter(a => a.status === 'proposal-sent').length,
      won: assessments.filter(a => a.status === 'won').length,
      lost: assessments.filter(a => a.status === 'lost').length,
    },
    byPriority: {
      low: assessments.filter(a => a.priority === 'low').length,
      medium: assessments.filter(a => a.priority === 'medium').length,
      high: assessments.filter(a => a.priority === 'high').length,
      urgent: assessments.filter(a => a.priority === 'urgent').length,
    },
    recent: assessments
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5),
  };

  return stats;
}
