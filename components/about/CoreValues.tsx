'use client';

import { motion } from 'framer-motion';
import { 
  BoltIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  LightBulbIcon,
  UserGroupIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    icon: BoltIcon,
    title: 'Speed Without Compromise',
    description: 'We deliver in 2-3 weeks, but we never cut corners on quality, security, or performance.',
    color: 'from-zd-electric-cyan to-zd-bright-cyan',
  },
  {
    icon: HeartIcon,
    title: 'Client-First Mindset',
    description: "Your success is our success. We treat every project like it's our own business.",
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Transparency Always',
    description: 'No hidden fees, no surprises. Clear pricing, honest timelines, and open communication.',
    color: 'from-zd-royal-blue to-zd-deep-navy',
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation & Excellence',
    description: 'We use cutting-edge tech and best practices to build solutions that stand the test of time.',
    color: 'from-zd-accent-amber to-yellow-500',
  },
  {
    icon: UserGroupIcon,
    title: 'Local Community Focus',
    description: 'Proud to support Jamaican businesses. We understand the local market and its unique needs.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: CheckBadgeIcon,
    title: 'Results-Driven Approach',
    description: 'Beautiful designs are great, but we focus on what matters most: conversions and growth.',
    color: 'from-zd-accent-purple to-purple-600',
  },
];

export function CoreValues() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl 
                       transition-all duration-300 border border-transparent hover:border-zd-royal-blue/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color}`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
