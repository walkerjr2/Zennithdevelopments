'use client';

import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  PencilSquareIcon, 
  CodeBracketSquareIcon, 
  RocketLaunchIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

const phases = [
  {
    week: 'Weeks 1-2',
    phase: 'Discovery & Planning',
    icon: MagnifyingGlassIcon,
    description: 'Deep dive into your business, goals, and target audience',
    deliverables: [
      'Project scope document',
      'Technical architecture plan',
      'User journey maps',
      'Timeline & milestones',
    ],
  },
  {
    week: 'Weeks 3-5',
    phase: 'Design & Prototyping',
    icon: PencilSquareIcon,
    description: 'Create stunning designs that convert visitors into customers',
    deliverables: [
      'Wireframes & mockups',
      'Interactive prototypes',
      'Brand guidelines',
      'Design system components',
    ],
  },
  {
    week: 'Weeks 6-10',
    phase: 'Development & Testing',
    icon: CodeBracketSquareIcon,
    description: 'Build your solution with clean, scalable, and secure code',
    deliverables: [
      'Fully functional website',
      'Admin dashboard',
      'API integrations',
      'Quality assurance testing',
    ],
  },
  {
    week: 'Weeks 11-12',
    phase: 'Launch & Optimization',
    icon: RocketLaunchIcon,
    description: 'Go live with confidence and continuous improvement',
    deliverables: [
      'Production deployment',
      'Performance optimization',
      'SEO implementation',
      '30-day support included',
    ],
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our 12-Week Process
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From concept to launch, we follow a proven methodology that delivers results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zd-royal-blue via-zd-electric-cyan to-zd-royal-blue" />

          {/* Phases */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 lg:w-1/2">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan">
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zd-electric-cyan">
                          {phase.week}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {phase.phase}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      {phase.description}
                    </p>

                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Key Deliverables:
                      </div>
                      {phase.deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-zd-electric-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Circle (Desktop Only) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan flex items-center justify-center text-white font-bold shadow-lg shadow-zd-royal-blue/50">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden lg:block flex-1 lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-primary mb-2">
              12 Weeks
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Average Project Timeline
            </div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-primary mb-2">
              97%
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              On-Time Delivery Rate
            </div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-primary mb-2">
              100%
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Client Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
