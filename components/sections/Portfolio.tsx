'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';

const categories = ['All', 'E-commerce', 'SaaS', 'Corporate', 'Custom'];

const projects = [
  {
    id: 1,
    title: 'TechFlow SaaS Platform',
    category: 'SaaS',
    description: 'Enterprise project management platform with real-time collaboration',
    image: '/images/project-1.jpg',
    results: {
      conversion: '+127%',
      revenue: '+$2.4M',
      users: '50K+',
    },
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
  },
  {
    id: 2,
    title: 'Luxe Fashion Store',
    category: 'E-commerce',
    description: 'High-end fashion e-commerce with AR try-on features',
    image: '/images/project-2.jpg',
    results: {
      conversion: '+89%',
      revenue: '+$890K',
      users: '25K+',
    },
    tags: ['Shopify', 'React', 'AR Integration', 'Stripe'],
  },
  {
    id: 3,
    title: 'Summit Legal Group',
    category: 'Corporate',
    description: 'Professional services website with client portal',
    image: '/images/project-3.jpg',
    results: {
      conversion: '+64%',
      leads: '320+',
      retention: '94%',
    },
    tags: ['Next.js', 'CMS', 'Authentication', 'Analytics'],
  },
  {
    id: 4,
    title: 'HealthTech Dashboard',
    category: 'Custom',
    description: 'Medical data visualization platform for healthcare providers',
    image: '/images/project-4.jpg',
    results: {
      efficiency: '+156%',
      users: '10K+',
      satisfaction: '4.8/5',
    },
    tags: ['React', 'D3.js', 'HIPAA', 'AWS'],
  },
  {
    id: 5,
    title: 'Artisan Marketplace',
    category: 'E-commerce',
    description: 'Multi-vendor platform connecting artists with buyers',
    image: '/images/project-5.jpg',
    results: {
      vendors: '500+',
      transactions: '$1.2M',
      growth: '+203%',
    },
    tags: ['Next.js', 'Stripe Connect', 'MongoDB', 'S3'],
  },
  {
    id: 6,
    title: 'InnovateCorp Portal',
    category: 'Corporate',
    description: 'Internal employee portal with HR and project management',
    image: '/images/project-6.jpg',
    results: {
      efficiency: '+78%',
      adoption: '98%',
      satisfaction: '4.7/5',
    },
    tags: ['React', 'Node.js', 'SSO', 'API Integration'],
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { openModal } = useContactModal();
  const { trackEvent } = useAnalytics();

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    trackEvent('portfolio_filter', { category });
  };

  return (
    <section id="work" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real results from real projects. See how we've helped businesses grow.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-zd-royal-blue text-white shadow-lg shadow-zd-royal-blue/30'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-80">{project.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <ArrowTopRightOnSquareIcon className="absolute top-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-zd-royal-blue dark:text-zd-electric-cyan">
                        {value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Ready to see similar results for your business?
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              trackEvent('cta_click', { location: 'portfolio_bottom' });
              openModal('questionnaire', { source: 'portfolio' });
            }}
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
