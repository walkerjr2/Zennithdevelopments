'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechFlow Solutions',
    image: '/images/avatar-1.jpg',
    rating: 5,
    text: 'ZennithDevelopments transformed our outdated website into a conversion machine. Within 3 months, we saw a 127% increase in qualified leads. Their attention to detail and commitment to our success was exceptional.',
    result: '+127% Leads',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Luxe Fashion',
    image: '/images/avatar-2.jpg',
    rating: 5,
    text: 'The team delivered beyond our expectations. Our new e-commerce platform is not only beautiful but incredibly fast and intuitive. Sales are up 89% and customer feedback has been overwhelmingly positive.',
    result: '+89% Sales',
  },
  {
    id: 3,
    name: 'Jennifer Rodriguez',
    role: 'Partner',
    company: 'Summit Legal Group',
    image: '/images/avatar-3.jpg',
    rating: 5,
    text: 'Professional, responsive, and incredibly skilled. They understood our industry and built a website that positions us as the premium choice in our market. Client inquiries have increased significantly.',
    result: '+64% Inquiries',
  },
  {
    id: 4,
    name: 'Dr. James Patterson',
    role: 'Director',
    company: 'HealthTech Innovations',
    image: '/images/avatar-4.jpg',
    rating: 5,
    text: 'Working with ZennithDevelopments was a game-changer. They built a complex data platform that our team uses daily. The efficiency gains have been remarkable, and the support has been outstanding.',
    result: '+156% Efficiency',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

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
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it—hear from businesses we've helped grow
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan flex items-center justify-center text-white text-2xl font-bold">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </div>
                  </div>
                </div>

                {/* Result Badge */}
                <div className="px-4 py-2 rounded-full bg-zd-electric-cyan/10 border border-zd-electric-cyan/20">
                  <span className="text-zd-royal-blue dark:text-zd-electric-cyan font-bold">
                    {currentTestimonial.result}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-zd-royal-blue'
                    : 'bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan mb-2">
              50+
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan mb-2">
              4.9/5
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan mb-2">
              100%
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Would Recommend
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan mb-2">
              $12M+
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Client Revenue Impact
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
