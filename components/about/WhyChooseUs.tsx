'use client';

import { motion } from 'framer-motion';
import {
  ClockIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const advantages = [
  {
    icon: ClockIcon,
    title: 'Lightning-Fast Delivery',
    description: '2-3 week turnaround vs industry standard 8-12 weeks',
    benefits: [
      'Get online faster',
      'Start generating revenue sooner',
      'Quick response to market opportunities',
    ],
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Affordable Pricing',
    description: 'Starting from $600 USD (~93,000 JMD)',
    benefits: [
      'No hidden fees or surprises',
      'Transparent pricing from day one',
      'Payment plans available',
    ],
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Always Available Support',
    description: 'Response time under 2 hours on average',
    benefits: [
      '30 days of free support included',
      'Available via WhatsApp, email, or phone',
      'Ongoing maintenance packages available',
    ],
  },
  {
    icon: ChartBarIcon,
    title: 'Conversion-Focused Design',
    description: 'Beautiful designs that actually drive results',
    benefits: [
      'Average 47% increase in conversions',
      'Mobile-first approach',
      'SEO optimized out of the box',
    ],
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Guaranteed',
    description: 'Enterprise-level code and security standards',
    benefits: [
      'Modern, scalable tech stack',
      'Regular backups and updates',
      '99.9% uptime guarantee',
    ],
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Local Businesses',
    description: 'We understand the local market and culture',
    benefits: [
      'Face-to-face meetings available',
      'Region-specific payment options',
      'Understanding of local business needs',
    ],
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
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
            Why Choose ZennithDevelopments?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We're different from traditional agencies, and our clients love us for it
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                       transition-all duration-300 border border-slate-200 dark:border-slate-800
                       hover:border-zd-royal-blue/30"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {advantage.title}
              </h3>
              <p className="text-sm text-zd-royal-blue dark:text-zd-electric-cyan font-semibold mb-4">
                {advantage.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-2">
                {advantage.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-zd-electric-cyan/10 to-zd-royal-blue/10 
                        border-2 border-zd-royal-blue/20 rounded-2xl p-8 max-w-3xl">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-zd-royal-blue dark:text-zd-electric-cyan">
                Still not convinced?
              </span>{' '}
              We offer a free consultation to discuss your project with no obligation. 
              Let's chat about how we can help your business grow online.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
