'use client';

import { motion } from 'framer-motion';
import { HeartIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export function OurStory() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                ZennithDevelopments was born from a simple observation: too many talented 
                businesses were being left behind in the digital age because traditional web development 
                was either too expensive, too slow, or too complicated.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                We saw restaurants struggling with outdated websites, service providers missing out on 
                online bookings, and retailers losing customers to competitors with better digital presence.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                So we decided to do something about it. We created a fast-track development process 
                that delivers professional, conversion-optimized websites in just 2-3 weeks, starting 
                from just <span className="font-semibold text-zd-royal-blue dark:text-zd-electric-cyan">$600 USD</span>.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Today, we're proud to be helping businesses compete and win in the digital marketplace.
              </p>
            </div>
          </motion.div>

          {/* Right: Mission Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Mission */}
            <div className="bg-gradient-to-br from-zd-royal-blue to-zd-deep-navy p-8 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <RocketLaunchIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-white/90 leading-relaxed">
                    To empower every business with a professional online presence that drives 
                    real results—fast, affordable, and without compromising quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-zd-electric-cyan to-zd-bright-cyan p-8 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <LightBulbIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                  <p className="text-white/90 leading-relaxed">
                    To become the world's most trusted web development partner, known for speed, 
                    quality, and helping businesses achieve measurable growth online.
                  </p>
                </div>
              </div>
            </div>

            {/* Promise */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border-2 border-zd-royal-blue/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan rounded-xl">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Promise</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    We treat your business like it's our own. Fast turnarounds, transparent pricing, 
                    and support that's actually there when you need it.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
