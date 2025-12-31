// Simple JSON-based database for project assessments
// In production, consider upgrading to Vercel Postgres or Supabase

import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const DB_PATH = path.join(process.cwd(), 'data', 'assessments.json');

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

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ assessments: [] }, null, 2));
  }
}

// Read all assessments
export async function getAllAssessments(): Promise<ProjectAssessment[]> {
  ensureDataDir();
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data).assessments;
}

// Get assessment by ID
export async function getAssessmentById(id: string): Promise<ProjectAssessment | null> {
  const assessments = await getAllAssessments();
  return assessments.find(a => a.id === id) || null;
}

// Create new assessment
export async function createAssessment(data: Omit<ProjectAssessment, 'id' | 'createdAt' | 'updatedAt'>): Promise<ProjectAssessment> {
  ensureDataDir();
  const assessments = await getAllAssessments();
  
  const newAssessment: ProjectAssessment = {
    ...data,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  assessments.push(newAssessment);
  fs.writeFileSync(DB_PATH, JSON.stringify({ assessments }, null, 2));
  
  return newAssessment;
}

// Update assessment
export async function updateAssessment(id: string, updates: Partial<ProjectAssessment>): Promise<ProjectAssessment | null> {
  ensureDataDir();
  const assessments = await getAllAssessments();
  const index = assessments.findIndex(a => a.id === id);
  
  if (index === -1) return null;
  
  assessments[index] = {
    ...assessments[index],
    ...updates,
    id: assessments[index].id,
    createdAt: assessments[index].createdAt,
    updatedAt: new Date().toISOString(),
  };
  
  fs.writeFileSync(DB_PATH, JSON.stringify({ assessments }, null, 2));
  return assessments[index];
}

// Delete assessment
export async function deleteAssessment(id: string): Promise<boolean> {
  ensureDataDir();
  const assessments = await getAllAssessments();
  const filteredAssessments = assessments.filter(a => a.id !== id);
  
  if (filteredAssessments.length === assessments.length) {
    return false;
  }
  
  fs.writeFileSync(DB_PATH, JSON.stringify({ assessments: filteredAssessments }, null, 2));
  return true;
}

// Get assessments with filters
export async function getFilteredAssessments(filters: {
  status?: string;
  priority?: string;
  search?: string;
  startDate?: string;
  endDate?: string;
}): Promise<ProjectAssessment[]> {
  let assessments = await getAllAssessments();
  
  if (filters.status) {
    assessments = assessments.filter(a => a.status === filters.status);
  }
  
  if (filters.priority) {
    assessments = assessments.filter(a => a.priority === filters.priority);
  }
  
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    assessments = assessments.filter(a => 
      a.clientName.toLowerCase().includes(searchLower) ||
      a.email.toLowerCase().includes(searchLower) ||
      a.company?.toLowerCase().includes(searchLower) ||
      a.projectType.toLowerCase().includes(searchLower) ||
      a.description.toLowerCase().includes(searchLower)
    );
  }
  
  if (filters.startDate) {
    assessments = assessments.filter(a => new Date(a.createdAt) >= new Date(filters.startDate!));
  }
  
  if (filters.endDate) {
    assessments = assessments.filter(a => new Date(a.createdAt) <= new Date(filters.endDate!));
  }
  
  return assessments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

// Get statistics
export async function getAssessmentStats() {
  const assessments = await getAllAssessments();
  
  return {
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
}
