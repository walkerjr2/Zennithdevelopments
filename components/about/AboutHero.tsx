'use client';

import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

export function AboutHero() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 -left-20 w-96 h-96 bg-zd-royal-blue/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-zd-electric-cyan/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-zd-electric-cyan/10 to-zd-royal-blue/10 border border-zd-electric-cyan/20"
          >
            <SparklesIcon className="w-4 h-4 text-zd-electric-cyan" />
            <span className="text-sm font-semibold text-zd-royal-blue dark:text-zd-electric-cyan">
              Proudly Jamaican 🇯🇲
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Building Digital Success,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zd-electric-cyan via-zd-royal-blue to-zd-deep-navy">
              One Business at a Time
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-light mb-8 leading-relaxed">
            We're a Jamaican web development agency on a mission to help local businesses 
            thrive online with fast, affordable, and conversion-focused websites.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan mb-1">
                50+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan mb-1">
                2-3 Weeks
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Average Turnaround
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan mb-1">
                100%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
