'use client';

import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  ClockIcon, 
  StarIcon, 
  ChartBarIcon,
  GlobeAltIcon,
  TrophyIcon 
} from '@heroicons/react/24/outline';

const stats = [
  {
    icon: UserGroupIcon,
    value: '50+',
    label: 'Happy Clients',
    description: "Businesses we've helped grow",
    color: 'from-zd-royal-blue to-zd-deep-navy',
  },
  {
    icon: ClockIcon,
    value: '<2hrs',
    label: 'Response Time',
    description: 'Average time to reply to queries',
    color: 'from-zd-electric-cyan to-zd-bright-cyan',
  },
  {
    icon: StarIcon,
    value: '4.9/5',
    label: 'Client Rating',
    description: 'Based on verified reviews',
    color: 'from-zd-accent-amber to-yellow-500',
  },
  {
    icon: ChartBarIcon,
    value: '47%',
    label: 'Avg. Conversion Boost',
    description: 'Increase after redesign/launch',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: GlobeAltIcon,
    value: '100%',
    label: 'Mobile Responsive',
    description: 'Every site works perfectly on mobile',
    color: 'from-zd-accent-purple to-purple-600',
  },
  {
    icon: TrophyIcon,
    value: '2-3wks',
    label: 'Delivery Time',
    description: 'From start to live website',
    color: 'from-red-500 to-pink-500',
  },
];

export function AboutStats() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
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
            By the Numbers
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real metrics from real projects
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center 
                          hover:shadow-2xl transition-all duration-300 border-2 border-transparent 
                          hover:border-zd-royal-blue/20">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Value */}
                <div className={`text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-br ${stat.color}`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            * All metrics based on completed projects as of December 2025. Individual results may vary 
            depending on project scope, industry, and business goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
