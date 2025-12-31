'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  CalendarIcon, 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';

interface TierConfirmationModalProps {
  service?: string;
  tier?: string;
  price?: string;
}

export function TierConfirmationModal({ 
  service = 'Service', 
  tier = 'Package',
  price 
}: TierConfirmationModalProps) {
  const { openModal, context } = useContactModal();
  const { trackEvent } = useAnalytics();

  // Use props or fall back to context
  const displayService = service || context?.service || 'Service';
  const displayTier = tier || context?.tier || 'Package';
  const displayPrice = price || context?.price;

  const handlePathSelection = (path: 'calendar' | 'questionnaire' | 'quick') => {
    trackEvent('conversion_path_selected', { 
      path,
      service: displayService,
      tier: displayTier 
    });
    
    openModal(path, {
      service: displayService,
      tier: displayTier,
      price: displayPrice,
      source: `tier-confirmation-${path}`
    });
  };

  const paths = [
    {
      id: 'calendar',
      icon: CalendarIcon,
      emoji: '📅',
      title: 'Book Consultation',
      time: '30 seconds',
      description: 'Schedule a free 15-min call to discuss your project',
      badge: 'Fastest',
      badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      benefits: [
        'Talk to us directly',
        'Ask questions live',
        'Get immediate feedback',
        'See our availability'
      ]
    },
    {
      id: 'questionnaire',
      icon: DocumentTextIcon,
      emoji: '📝',
      title: 'Project Details',
      time: '3 minutes',
      description: 'Fill out detailed questionnaire about your needs',
      badge: 'Most Detail',
      badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      benefits: [
        'Share all requirements',
        'Upload files/references',
        'Detailed project scope',
        'Complete assessment'
      ]
    },
    {
      id: 'quick',
      icon: ChatBubbleLeftRightIcon,
      emoji: '💬',
      title: 'Quick Contact',
      time: '10 seconds',
      description: 'Just send your contact info and we\'ll reach out',
      badge: 'Easiest',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      benefits: [
        'Super quick',
        'No commitment',
        'We\'ll contact you',
        'Perfect for mobile'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header - Reinforce their choice */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
          <CheckCircleIcon className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Great Choice!
        </h2>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-zd-royal-blue to-blue-600 text-white text-sm font-semibold mb-3">
          <span>{displayTier}</span>
          {displayPrice && (
            <>
              <span className="opacity-50">•</span>
              <span>{displayPrice}</span>
            </>
          )}
        </div>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          How would you like to get started with your <span className="font-semibold text-slate-900 dark:text-white">{displayService}</span> project?
        </p>
      </motion.div>

      {/* Three Path Options */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {paths.map((path, index) => (
          <motion.div
            key={path.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-zd-electric-cyan dark:hover:border-zd-electric-cyan transition-all duration-300 hover:shadow-xl">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${path.badgeColor}`}>
                  {path.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="text-4xl mb-3">{path.emoji}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {path.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                  <ClockIcon className="w-4 h-4" />
                  <span>{path.time}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 text-center min-h-[40px]">
                {path.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {path.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant="primary"
                className="w-full group-hover:scale-105 transition-transform"
                onClick={() => handlePathSelection(path.id as 'calendar' | 'questionnaire' | 'quick')}
              >
                {path.title === 'Book Consultation' && 'Book Now'}
                {path.title === 'Project Details' && 'Fill Form'}
                {path.title === 'Quick Contact' && 'Send Info'}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Signals */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <div className="inline-flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <CheckCircleIcon className="w-4 h-4 text-green-500" />
            <span>No commitment required</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <div className="flex items-center gap-1">
            <CheckCircleIcon className="w-4 h-4 text-green-500" />
            <span>Free consultation</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <div className="flex items-center gap-1">
            <CheckCircleIcon className="w-4 h-4 text-green-500" />
            <span>Response within 24 hours</span>
          </div>
        </div>
      </motion.div>

      {/* Optional: Not ready yet? */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6"
      >
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Not ready yet?{' '}
          <button
            onClick={() => openModal('selector')}
            className="text-zd-royal-blue dark:text-zd-electric-cyan hover:underline font-medium"
          >
            Explore other options
          </button>
        </p>
      </motion.div>
    </div>
  );
}
