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
  message: z.string().min(10, 'Please provide at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

export function QuickContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { closeModal, context } = useContactModal();
  const { trackConversion } = useAnalytics();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...data, 
          type: 'quick_contact',
          service: context?.service,
          tier: context?.tier,
          price: context?.price,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        trackConversion('quick_contact_submitted', 1);
        
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
          Message Sent!
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          We'll get back to you within 2 hours during business hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="px-6 py-4">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Quick Contact
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Send us a message and we'll respond quickly.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Message *
          </label>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan focus:border-transparent"
            placeholder="Tell us how we can help..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}
