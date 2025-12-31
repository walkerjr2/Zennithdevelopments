'use client';

import { motion } from 'framer-motion';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';
import {
  ClipboardDocumentListIcon,
  CalculatorIcon,
} from '@heroicons/react/24/outline';

const assessmentOptions = [
  {
    id: 'questionnaire',
    title: 'Detailed Questionnaire',
    description: 'Answer guided questions about your project needs and goals',
    icon: ClipboardDocumentListIcon,
    badge: 'Most Detailed',
    timeEstimate: '5-7 minutes',
    bestFor: ['Clear project vision', 'Want detailed proposal', 'Complex requirements'],
  },
  {
    id: 'calculator',
    title: 'Quick Cost Calculator',
    description: 'Get an instant estimate based on your project specifications',
    icon: CalculatorIcon,
    badge: 'Fastest',
    timeEstimate: '3-4 minutes',
    bestFor: ['Budget planning', 'Quick estimate', 'Simple projects'],
  },
];

export function AssessmentPathSelector() {
  const { openModal } = useContactModal();
  const { trackEvent } = useAnalytics();

  const handleSelection = (pathId: string) => {
    trackEvent('assessment_path_selected', { path: pathId });
    openModal(pathId as any);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Choose Your Assessment Path
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Both options give you a custom quote - pick what works best for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessmentOptions.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleSelection(option.id)}
            className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 text-left
                     hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 
                     dark:border-slate-700 hover:border-zd-royal-blue dark:hover:border-zd-electric-cyan"
          >
            {/* Badge */}
            {option.badge && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold
                            bg-gradient-to-r from-zd-royal-blue to-zd-electric-cyan text-white">
                {option.badge}
              </div>
            )}

            {/* Icon */}
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan
                           group-hover:scale-110 transition-transform duration-300">
                <option.icon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-zd-royal-blue 
                         dark:group-hover:text-zd-electric-cyan transition-colors">
              {option.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {option.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {option.timeEstimate}
            </div>

            {/* Best For */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Perfect if you:</p>
              <ul className="space-y-1">
                {option.bestFor.map((item) => (
                  <li key={item} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-zd-electric-cyan mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover Indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary scale-x-0 
                          group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
          </motion.button>
        ))}
      </div>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Need help deciding?{' '}
        <button
          onClick={() => {
            trackEvent('help_requested');
            openModal('calendar');
          }}
          className="font-semibold text-zd-electric-cyan hover:underline"
        >
          Schedule a quick call
        </button>
        {' '}and we'll guide you
      </p>
    </div>
  );
}
