'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range (USD)'),
  timeline: z.string().min(1, 'Please select a timeline'),
  description: z.string().min(20, 'Please provide at least 20 characters'),
  currentWebsite: z.string().optional(),
  goals: z.array(z.string()).min(1, 'Please select at least one goal'),
  hearAbout: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  'New Website',
  'Website Redesign',
  'E-commerce Store',
  'Web Application',
  'Landing Page',
  'Other',
];

const budgetRanges = [
  'Under $1500',
  '$1500 - $3000',
  '$3000 - $5000',
  '$5000 - $10000',
  'Over $10000',
];

const timelines = [
  'ASAP (1-3 weeks)',
  'Flexible (1-3 months)',
  'No Rush (3+ months)',
  'Just Exploring',
];

const goalOptions = [
  'Increase Sales',
  'Generate Leads',
  'Build Brand Awareness',
  'Improve User Experience',
  'Launch New Product',
  'Modernize Technology',
];

export function ProjectQuestionnaire() {
  const [submitted, setSubmitted] = useState(false);
  const { closeModal, context } = useContactModal();
  const { trackConversion } = useAnalytics();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      goals: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...data, 
          type: 'questionnaire',
          service: context?.service,
          tier: context?.tier,
          price: context?.price,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        trackConversion('questionnaire_submitted', 1);
        
        // Close modal after 3 seconds
        setTimeout(() => {
          closeModal();
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Thank You!
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          We'll review your information and get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Project Assessment
      </h3>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Tell us about your project so we can provide the best recommendations.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Full Name *
            </label>
            <input
              {...register('name')}
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Project Details */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Project Type *
          </label>
          <select
            {...register('projectType')}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Budget Range *
            </label>
            <select
              {...register('budget')}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
            >
              <option value="">Select budget</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Timeline *
            </label>
            <select
              {...register('timeline')}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
            >
              <option value="">Select timeline</option>
              {timelines.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Current Website (if any)
          </label>
          <input
            {...register('currentWebsite')}
            type="url"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
            Project Goals * (Select all that apply)
          </label>
          <div className="grid grid-cols-2 gap-3">
            {goalOptions.map((goal) => (
              <label key={goal} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={goal}
                  {...register('goals')}
                  className="w-4 h-4 rounded border-slate-300 text-zd-royal-blue focus:ring-zd-royal-blue"
                />
                <span className="text-sm text-slate-700 dark:text-slate-300">{goal}</span>
              </label>
            ))}
          </div>
          {errors.goals && (
            <p className="text-red-500 text-sm mt-1">{errors.goals.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Project Description *
          </label>
          <textarea
            {...register('description')}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
            placeholder="Tell us about your project vision, target audience, and key features..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            How did you hear about us?
          </label>
          <input
            {...register('hearAbout')}
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
            placeholder="Google, LinkedIn, Referral, etc."
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
        </Button>
      </form>
    </div>
  );
}
