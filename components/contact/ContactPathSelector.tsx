'use client';

import { motion } from 'framer-motion';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';
import {
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  CalculatorIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

interface PathOption {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  timeEstimate: string;
  bestFor: string[];
}

const pathOptions: PathOption[] = [
  {
    id: 'questionnaire',
    title: 'The Planner',
    description: 'Share detailed project requirements through our guided questionnaire',
    icon: ClipboardDocumentListIcon,
    badge: 'Most Popular',
    timeEstimate: '5-7 minutes',
    bestFor: ['Clear project vision', 'Want detailed proposal', 'Organized planning'],
  },
  {
    id: 'calendar',
    title: 'The Conversationalist',
    description: 'Book a strategy call to discuss your project with our team',
    icon: ChatBubbleLeftRightIcon,
    badge: 'Highest Quality',
    timeEstimate: '15-60 minutes',
    bestFor: ['Need guidance', 'Prefer discussion', 'Complex requirements'],
  },
  {
    id: 'calculator',
    title: 'The Estimator',
    description: 'Get an instant project cost estimate with our interactive calculator',
    icon: CalculatorIcon,
    timeEstimate: '3-4 minutes',
    bestFor: ['Budget planning', 'Cost transparency', 'Quick overview'],
  },
  {
    id: 'quick',
    title: 'Quick Contact',
    description: "Send us a message and we'll respond within 2 hours",
    icon: EnvelopeIcon,
    timeEstimate: '30 seconds',
    bestFor: ['Simple inquiry', 'Already know details', 'Fastest option'],
  },
];

export function ContactPathSelector() {
  const { openModal } = useContactModal();
  const { trackEvent } = useAnalytics();

  const handlePathSelection = (pathId: string) => {
    trackEvent('contact_path_selected', { path: pathId });
    openModal(pathId as any);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          How Would You Like to Start?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Choose the path that feels right for you
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pathOptions.map((path, index) => (
          <motion.button
            key={path.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handlePathSelection(path.id)}
            className="relative group p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-zd-electric-cyan hover:shadow-glow transition-all duration-300 text-left"
          >
            {path.badge && (
              <span className="absolute top-4 right-4 px-3 py-1 bg-zd-electric-cyan/10 text-zd-electric-cyan text-xs font-semibold rounded-full">
                {path.badge}
              </span>
            )}

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-lg">
                <path.icon className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-zd-electric-cyan transition-colors">
                  {path.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {path.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    ⏱ {path.timeEstimate}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Best for:
                  </p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    {path.bestFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-zd-electric-cyan">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
          </motion.button>
        ))}
      </div>

      <p className="text-center text-sm text-slate-600 dark:text-slate-400">
        Not sure which path to choose?{' '}
        <button
          onClick={() => handlePathSelection('calendar')}
          className="font-semibold text-zd-electric-cyan hover:underline"
        >
          Schedule a quick call
        </button>
        {' '}and we'll guide you
      </p>
    </div>
  );
}
