'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';

const categories = ['All', 'Local Business', 'E-commerce', 'Restaurant', 'Services'];

const projects = [
  {
    id: 1,
    title: 'Sparkles Auto Spa',
    category: 'Local Business',
    description: 'Professional car detailing service website with online booking system',
    image: '/images/project-sparkles.jpg',
    url: 'https://sparklesautospajm.com',
    featured: true,
    results: {
      'Load Time': '<2s',
      'Mobile Score': '95/100',
      'SEO Ready': '✓',
    },
    tags: ['Next.js', 'Responsive Design', 'Online Booking', 'SEO'],
  },
  {
    id: 2,
    title: 'Island Eats Restaurant',
    category: 'Restaurant',
    description: 'Modern restaurant website with online ordering and menu management',
    image: '/images/project-restaurant.jpg',
    results: {
      'Page Speed': '<3s',
      'Conversion': '+40%',
      'Mobile First': '✓',
    },
    tags: ['React', 'Online Ordering', 'Menu System', 'Mobile Design'],
  },
  {
    id: 3,
    title: 'Paradise Realty',
    category: 'Services',
    description: 'Real estate agency website with property listings and inquiry forms',
    image: '/images/project-realty.jpg',
    results: {
      'Lead Gen': '+65%',
      'User Time': '+3min',
      'Responsive': '✓',
    },
    tags: ['Next.js', 'CMS', 'Contact Forms', 'Gallery'],
  },
  {
    id: 4,
    title: 'Tropical Vibes Store',
    category: 'E-commerce',
    description: 'E-commerce platform for local crafts with secure checkout',
    image: '/images/project-ecommerce.jpg',
    results: {
      'Cart Rate': '+55%',
      'Secure': '✓',
      'Fast Load': '<2.5s',
    },
    tags: ['Shopify', 'Payment Integration', 'Product Gallery', 'SEO'],
  },
  {
    id: 5,
    title: 'Wellness Spa & Retreat',
    category: 'Services',
    description: 'Luxury spa website with appointment booking and service showcase',
    image: '/images/project-spa.jpg',
    results: {
      'Bookings': '+45%',
      'Mobile': '100%',
      'Uptime': '99.9%',
    },
    tags: ['Next.js', 'Booking System', 'Gallery', 'Responsive'],
  },
  {
    id: 6,
    title: 'Cafe Vibes',
    category: 'Restaurant',
    description: 'Cozy cafe website with digital menu and location information',
    image: '/images/project-cafe.jpg',
    results: {
      'Engagement': '+50%',
      'Fast': '<2s',
      'Reviews': '4.8/5',
    },
    tags: ['React', 'Digital Menu', 'Google Maps', 'Mobile Design'],
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const { openModal } = useContactModal();
  const { trackEvent } = useAnalytics();

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Show only 6 projects initially, or all if expanded
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false); // Reset to collapsed when changing category
    trackEvent('portfolio_filter', { category });
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    trackEvent('portfolio_toggle', { action: showAll ? 'collapse' : 'expand' });
  };

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-slate-100 to-white dark:from-slate-950 dark:to-slate-900">
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
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const categoryCount = category === 'All' 
                ? projects.length 
                : projects.filter((p) => p.category === category).length;
              
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border inline-flex items-center gap-2 ${
                    activeCategory === category
                      ? 'bg-zd-royal-blue text-white shadow-lg shadow-zd-royal-blue/30 border-zd-royal-blue scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 hover:scale-105'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === category
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}>
                    {categoryCount}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-zd-accent-amber text-white text-xs font-bold rounded-full shadow-lg">
                      LIVE PROJECT
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
                    onClick={() => trackEvent('portfolio_visit', { project: project.title })}
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
                  </a>
                )}
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
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Site Button */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 text-center bg-gradient-to-r from-zd-electric-cyan to-zd-royal-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    onClick={() => trackEvent('portfolio_visit_button', { project: project.title })}
                  >
                    View Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleToggleShowAll}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-zd-royal-blue dark:text-zd-electric-cyan border-2 border-zd-royal-blue dark:border-zd-electric-cyan rounded-full font-semibold hover:bg-zd-royal-blue hover:dark:bg-zd-electric-cyan hover:text-white hover:dark:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>{showAll ? 'Show Less' : `View All ${filteredProjects.length} Projects`}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {!showAll && (
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Showing {displayedProjects.length} of {filteredProjects.length} projects
              </p>
            )}
          </motion.div>
        )}

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
