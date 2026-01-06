'use client';

import { motion } from 'framer-motion';
import { CTACluster } from '@/components/contact/CTACluster';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';

const guarantees = [
  {
    icon: CheckCircleIcon,
    title: '100% Satisfaction',
    description: 'We work until you love it',
  },
  {
    icon: ClockIcon,
    title: 'On-Time Delivery',
    description: '97% of projects on schedule',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure & Scalable',
    description: 'Built for growth',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: '<2hr Response',
    description: 'Always here when you need us',
  },
];

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-zd-deep-blue to-slate-900 dark:from-slate-950 dark:via-zd-deep-blue dark:to-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-zd-electric-cyan/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-zd-royal-blue/20 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Elevate Your
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zd-electric-cyan via-blue-400 to-zd-electric-cyan animate-gradient">
              Digital Presence?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
            Join 50+ successful businesses who trusted us to transform their online presence.
            Let's create something extraordinary together.
          </p>

          {/* CTA Buttons */}
          <CTACluster context="final-cta" />
        </motion.div>

        {/* Guarantees Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="inline-flex p-3 rounded-xl bg-zd-electric-cyan/20 mb-4">
                <guarantee.icon className="w-8 h-8 text-zd-electric-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {guarantee.title}
              </h3>
              <p className="text-slate-200">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-medium">
              Rated 4.9/5 by 50+ clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
