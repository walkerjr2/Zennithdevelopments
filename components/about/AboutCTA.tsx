'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

export function AboutCTA() {
  const { openModal } = useContactModal();
  const { trackEvent } = useAnalytics();

  const handleStartProject = () => {
    trackEvent('cta_click', { location: 'about_page_cta', type: 'start_project' });
    openModal('questionnaire', { source: 'about' });
  };

  const handleScheduleCall = () => {
    trackEvent('cta_click', { location: 'about_page_cta', type: 'schedule_call' });
    openModal('quick', { source: 'about' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zd-royal-blue via-zd-deep-navy to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-zd-electric-cyan/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-zd-accent-purple/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full 
                        bg-white/10 backdrop-blur-sm border border-white/20">
            <SparklesIcon className="w-4 h-4 text-zd-electric-cyan" />
            <span className="text-sm font-semibold text-white">
              Ready to Get Started?
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're starting from scratch or need a redesign, we're here to help. 
            Get your professional website in just 2-3 weeks, starting from $600 USD.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleStartProject}
              className="group bg-white hover:bg-slate-100 text-zd-royal-blue"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={handleScheduleCall}
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Schedule a Free Call
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No commitment consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Quick response guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>30 days support included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
