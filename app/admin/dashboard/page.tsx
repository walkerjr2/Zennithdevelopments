'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProjectAssessment {
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

interface Stats {
  total: number;
  byStatus: {
    new: number;
    contacted: number;
    inProgress: number;
    proposalSent: number;
    won: number;
    lost: number;
  };
  byPriority: {
    low: number;
    medium: number;
    high: number;
    urgent: number;
  };
}

export default function AdminDashboard() {
  const router = useRouter();
  const [assessments, setAssessments] = useState<ProjectAssessment[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedAssessment, setSelectedAssessment] = useState<ProjectAssessment | null>(null);
  
  // Filters
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    loadData();
  }, [router]);

  const loadData = async () => {
    try {
      const token = sessionStorage.getItem('adminToken');
      
      // Load stats
      const statsRes = await fetch('/api/admin/assessments?action=stats', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      // Load assessments with filters
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.append('status', statusFilter);
      if (priorityFilter !== 'all') params.append('priority', priorityFilter);
      if (searchQuery) params.append('search', searchQuery);

      const assessmentsRes = await fetch(`/api/admin/assessments?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (assessmentsRes.ok) {
        const data = await assessmentsRes.json();
        setAssessments(data);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      loadData();
    }
  }, [statusFilter, priorityFilter, searchQuery]);

  const updateAssessment = async (id: string, updates: Partial<ProjectAssessment>) => {
    try {
      const token = sessionStorage.getItem('adminToken');
      const res = await fetch(`/api/admin/assessments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updates)
      });

      if (res.ok) {
        loadData();
        if (selectedAssessment?.id === id) {
          const updated = await res.json();
          setSelectedAssessment(updated);
        }
      }
    } catch (error) {
      console.error('Error updating assessment:', error);
    }
  };

  const deleteAssessment = async (id: string) => {
    if (!confirm('Are you sure you want to delete this assessment?')) return;

    try {
      const token = sessionStorage.getItem('adminToken');
      const res = await fetch(`/api/admin/assessments/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.ok) {
        loadData();
        setSelectedAssessment(null);
      }
    } catch (error) {
      console.error('Error deleting assessment:', error);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
      contacted: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
      'in-progress': 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
      'proposal-sent': 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
      won: 'bg-green-500/20 text-green-300 border border-green-500/30',
      lost: 'bg-red-500/20 text-red-300 border border-red-500/30'
    };
    return colors[status] || 'bg-slate-700 text-slate-300 border border-slate-600';
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      low: 'bg-slate-700 text-slate-300 border border-slate-600',
      medium: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
      high: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
      urgent: 'bg-red-500/20 text-red-300 border border-red-500/30'
    };
    return colors[priority] || 'bg-slate-700 text-slate-300 border border-slate-600';
  };

  const logout = () => {
    sessionStorage.removeItem('adminToken');
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zd-electric-cyan mx-auto"></div>
          <p className="mt-4 text-slate-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Zennith <span className="text-zd-electric-cyan">Admin</span>
            </h1>
            <p className="text-sm text-slate-400">Project Assessment Dashboard</p>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm text-red-400 hover:text-red-300 font-medium transition border border-red-500/30 rounded-lg hover:bg-red-500/10"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-zd-electric-cyan/50 transition">
              <h3 className="text-sm font-medium text-slate-400">Total Assessments</h3>
              <p className="mt-2 text-3xl font-bold text-white">{stats.total}</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition">
              <h3 className="text-sm font-medium text-slate-400">New</h3>
              <p className="mt-2 text-3xl font-bold text-blue-400">{stats.byStatus.new}</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-purple-500/50 transition">
              <h3 className="text-sm font-medium text-slate-400">In Progress</h3>
              <p className="mt-2 text-3xl font-bold text-purple-400">{stats.byStatus.inProgress}</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-green-500/50 transition">
              <h3 className="text-sm font-medium text-slate-400">Won</h3>
              <p className="mt-2 text-3xl font-bold text-green-400">{stats.byStatus.won}</p>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Search
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email, company..."
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-zd-electric-cyan focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-zd-electric-cyan focus:border-transparent transition"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="in-progress">In Progress</option>
                <option value="proposal-sent">Proposal Sent</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Priority
              </label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-zd-electric-cyan focus:border-transparent transition"
              >
                <option value="all">All Priorities</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Assessments Table */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700/50">
              <thead className="bg-slate-900/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Project Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {assessments.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-400">
                      No assessments found. Submit a project assessment form to see data here.
                    </td>
                  </tr>
                ) : (
                  assessments.map((assessment) => (
                    <tr key={assessment.id} className="hover:bg-slate-700/30 transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{assessment.clientName}</div>
                        <div className="text-sm text-slate-400">{assessment.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                        {assessment.projectType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                        {assessment.budget}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={assessment.status}
                          onChange={(e) => updateAssessment(assessment.id, { status: e.target.value as any })}
                          className={`text-xs px-3 py-1 rounded-full font-medium cursor-pointer ${getStatusColor(assessment.status)} bg-transparent`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="in-progress">In Progress</option>
                          <option value="proposal-sent">Proposal Sent</option>
                          <option value="won">Won</option>
                          <option value="lost">Lost</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={assessment.priority}
                          onChange={(e) => updateAssessment(assessment.id, { priority: e.target.value as any })}
                          className={`text-xs px-3 py-1 rounded-full font-medium cursor-pointer ${getPriorityColor(assessment.priority)} bg-transparent`}
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                        {new Date(assessment.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                        <button
                          onClick={() => setSelectedAssessment(assessment)}
                          className="text-zd-electric-cyan hover:text-zd-electric-cyan/80 transition"
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteAssessment(assessment.id)}
                          className="text-red-400 hover:text-red-300 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Assessment Detail Modal */}
      {selectedAssessment && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Assessment Details</h2>
              <button
                onClick={() => setSelectedAssessment(null)}
                className="text-slate-400 hover:text-white text-3xl leading-none transition"
              >
                &times;
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400">Client Name</label>
                  <p className="mt-1 text-sm text-white">{selectedAssessment.clientName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Email</label>
                  <p className="mt-1 text-sm text-white">{selectedAssessment.email}</p>
                </div>
                {selectedAssessment.phone && (
                  <div>
                    <label className="block text-sm font-medium text-slate-400">Phone</label>
                    <p className="mt-1 text-sm text-white">{selectedAssessment.phone}</p>
                  </div>
                )}
                {selectedAssessment.company && (
                  <div>
                    <label className="block text-sm font-medium text-slate-400">Company</label>
                    <p className="mt-1 text-sm text-white">{selectedAssessment.company}</p>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-slate-400">Project Type</label>
                  <p className="mt-1 text-sm text-white">{selectedAssessment.projectType}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Budget</label>
                  <p className="mt-1 text-sm text-white">{selectedAssessment.budget}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Timeline</label>
                  <p className="mt-1 text-sm text-white">{selectedAssessment.timeline}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Created</label>
                  <p className="mt-1 text-sm text-white">
                    {new Date(selectedAssessment.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400">Description</label>
                <p className="mt-1 text-sm text-slate-300 whitespace-pre-wrap">{selectedAssessment.description}</p>
              </div>

              {selectedAssessment.features && selectedAssessment.features.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-slate-400">Features</label>
                  <ul className="mt-1 text-sm text-slate-300 list-disc list-inside">
                    {selectedAssessment.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedAssessment.currentWebsite && (
                <div>
                  <label className="block text-sm font-medium text-slate-400">Current Website</label>
                  <p className="mt-1 text-sm text-zd-electric-cyan">
                    <a href={selectedAssessment.currentWebsite} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {selectedAssessment.currentWebsite}
                    </a>
                  </p>
                </div>
              )}

              {selectedAssessment.targetAudience && (
                <div>
                  <label className="block text-sm font-medium text-slate-400">Target Audience</label>
                  <p className="mt-1 text-sm text-slate-300">{selectedAssessment.targetAudience}</p>
                </div>
              )}

              {selectedAssessment.competitors && (
                <div>
                  <label className="block text-sm font-medium text-slate-400">Competitors</label>
                  <p className="mt-1 text-sm text-slate-300">{selectedAssessment.competitors}</p>
                </div>
              )}

              {selectedAssessment.additionalInfo && (
                <div>
                  <label className="block text-sm font-medium text-slate-400">Additional Info</label>
                  <p className="mt-1 text-sm text-slate-300 whitespace-pre-wrap">{selectedAssessment.additionalInfo}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Internal Notes</label>
                <textarea
                  value={selectedAssessment.notes || ''}
                  onChange={(e) => setSelectedAssessment({ ...selectedAssessment, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-zd-electric-cyan focus:border-transparent transition"
                  rows={4}
                  placeholder="Add internal notes..."
                />
                <button
                  onClick={() => updateAssessment(selectedAssessment.id, { notes: selectedAssessment.notes })}
                  className="mt-2 px-6 py-2 bg-zd-electric-cyan hover:bg-zd-electric-cyan/90 text-slate-900 font-semibold rounded-lg transition"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
