'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  AcademicCapIcon, 
  CodeBracketIcon, 
  TrophyIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';

export function MeetTheFounder() {
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
            Meet the Founder
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The person behind ZennithDevelopments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Photo & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Photo Placeholder - Replace with your actual photo */}
            <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-2">CR</div>
                  <div className="text-xl">Cosroy Walker</div>
                </div>
              </div>
              {/* Uncomment when you have a photo:
              <Image
                src="/images/founder.jpg"
                alt="Cosroy Walker - Founder of ZennithDevelopments"
                fill
                className="object-cover"
              />
              */}
            </div>

            {/* Quick Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl">
                <MapPinIcon className="w-6 h-6 text-zd-royal-blue" />
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Based in</div>
                  <div className="font-semibold text-slate-900 dark:text-white">Jamaica 🇯🇲</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl">
                <CodeBracketIcon className="w-6 h-6 text-zd-electric-cyan" />
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Specializes in</div>
                  <div className="font-semibold text-slate-900 dark:text-white">Full-Stack Development</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl">
                <TrophyIcon className="w-6 h-6 text-zd-accent-amber" />
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Completed</div>
                  <div className="font-semibold text-slate-900 dark:text-white">50+ Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Cosroy Walker
              </h3>
              <p className="text-lg text-zd-royal-blue dark:text-zd-electric-cyan font-semibold mb-6">
                Founder & Lead Developer
              </p>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Hey! I'm Cosroy, a Jamaican web developer passionate about helping local businesses 
                  succeed online. I started ZennithDevelopments because I saw too many talented 
                  entrepreneurs held back by expensive, slow web development services.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  With years of experience in modern web technologies like Next.js, React, and TypeScript, 
                  I've perfected a fast-track process that delivers premium results without the premium 
                  wait time or price tag.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new tech, collaborating with local 
                  businesses, and constantly learning to deliver the best possible solutions to my clients.
                </p>
              </div>

              {/* Skills/Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Next.js',
                    'React',
                    'TypeScript',
                    'Tailwind CSS',
                    'Node.js',
                    'Responsive Design',
                    'SEO',
                    'Performance Optimization',
                    'E-commerce',
                    'API Integration',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-zd-royal-blue/10 to-zd-electric-cyan/10 
                               border border-zd-royal-blue/20 text-slate-700 dark:text-slate-300 
                               rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
