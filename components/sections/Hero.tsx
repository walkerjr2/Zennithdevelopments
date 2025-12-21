'use client';

import { motion } from 'framer-motion';
import { CTACluster } from '@/components/contact/CTACluster';
import { SparklesIcon, RocketLaunchIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-20">
      {/* Animated Background Orbs - More Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-zd-electric-cyan/20 to-zd-royal-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-zd-royal-blue/15 to-zd-accent-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="text-center space-y-10 max-w-5xl mx-auto">
          
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-zd-electric-cyan/10 to-zd-royal-blue/10 border border-zd-electric-cyan/30 backdrop-blur-sm shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zd-electric-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zd-electric-cyan"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-zd-royal-blue to-zd-deep-navy bg-clip-text text-transparent dark:from-zd-electric-cyan dark:to-zd-bright-cyan">
                Accepting New Projects • Fast Turnaround
              </span>
              <SparklesIcon className="w-4 h-4 text-zd-electric-cyan" />
            </div>
          </motion.div>

          {/* Main Headline - Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
              <span className="block text-slate-900 dark:text-white mb-2">
                Premium Web Solutions
              </span>
              <span className="block bg-gradient-to-r from-zd-electric-cyan via-zd-royal-blue to-zd-deep-navy bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                That Drive Results
              </span>
            </h1>
          </motion.div>

          {/* Subheadline - Improved Clarity */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Custom websites and web applications built for{' '}
            <span className="font-semibold text-zd-royal-blue dark:text-zd-electric-cyan">Jamaican businesses</span>
            {' '}ready to scale online. Projects starting from{' '}
            <span className="font-semibold text-zd-royal-blue dark:text-zd-electric-cyan">$600 USD</span>
            {' '}and delivered in as little as{' '}
            <span className="font-semibold text-zd-royal-blue dark:text-zd-electric-cyan">2-3 weeks</span>.
          </motion.p>

          {/* CTA Cluster - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pt-6"
          >
            <CTACluster context="hero" />
          </motion.div>

          {/* Trust Indicators - Enhanced with Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <CheckBadgeIcon className="w-5 h-5 text-zd-electric-cyan" />
                <span className="font-semibold text-slate-900 dark:text-white">4.9/5</span>
                <span>from 50+ clients</span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <RocketLaunchIcon className="w-5 h-5 text-zd-electric-cyan" />
                <span className="font-semibold text-slate-900 dark:text-white">47%</span>
                <span>avg. conversion increase</span>
              </div>

              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <svg className="w-5 h-5 text-zd-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-slate-900 dark:text-white">&lt; 2hr</span>
                <span>response time</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-20"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 text-slate-400 hover:text-zd-electric-cyan transition-colors cursor-pointer"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-xs font-medium uppercase tracking-wider">Explore Our Work</span>
              <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-current"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
