'use client';

import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, limit, where, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Assessment {
  id: string;
  clientName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  estimatedCost?: number;
  timestamp: any;
  status?: string;
  priority?: string;
}

export interface DashboardStats {
  totalAssessments: number;
  todayAssessments: number;
  highPriorityCount: number;
  avgQuoteValue: number;
  recentAssessments: Assessment[];
  isLoading: boolean;
}

export function useRealtimeDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalAssessments: 0,
    todayAssessments: 0,
    highPriorityCount: 0,
    avgQuoteValue: 0,
    recentAssessments: [],
    isLoading: true
  });
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only run in browser with Firebase configured
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      console.log('⚠️ Firebase not configured, skipping real-time updates');
      setStats(prev => ({ ...prev, isLoading: false }));
      return;
    }

    try {
      // Real-time listener for assessments
      const assessmentsQuery = query(
        collection(db, 'assessments'),
        orderBy('timestamp', 'desc'),
        limit(50)
      );

      const unsubscribe = onSnapshot(
        assessmentsQuery,
        (snapshot) => {
          const assessments = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Assessment[];

          console.log('🔄 Real-time update:', assessments.length, 'assessments');

          // Calculate stats
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const todayCount = assessments.filter(a => {
            if (!a.timestamp) return false;
            const assessmentDate = a.timestamp.toDate ? a.timestamp.toDate() : new Date(a.timestamp);
            return assessmentDate >= today;
          }).length;

          const highPriority = assessments.filter(a => {
            const cost = parseFloat(String(a.estimatedCost || a.budget || '0').replace(/[$,]/g, ''));
            return cost >= 3000 || a.projectType === 'E-commerce Store';
          }).length;

          const costs = assessments.map(a => {
            const cost = parseFloat(String(a.estimatedCost || a.budget || '0').replace(/[$,]/g, ''));
            return cost;
          }).filter(c => c > 0);

          const totalValue = costs.reduce((sum, cost) => sum + cost, 0);
          const avgValue = costs.length > 0 ? totalValue / costs.length : 0;

          setStats({
            totalAssessments: assessments.length,
            todayAssessments: todayCount,
            highPriorityCount: highPriority,
            avgQuoteValue: Math.round(avgValue),
            recentAssessments: assessments.slice(0, 10),
            isLoading: false
          });

          setLastUpdate(new Date());
          setError(null);
        },
        (error) => {
          console.error('❌ Error listening to assessments:', error);
          setError(error.message);
          setStats(prev => ({ ...prev, isLoading: false }));
        }
      );

      return () => {
        console.log('🔌 Unsubscribing from real-time updates');
        unsubscribe();
      };
    } catch (err) {
      console.error('❌ Error setting up real-time listener:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      setStats(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  return { stats, lastUpdate, error };
}
