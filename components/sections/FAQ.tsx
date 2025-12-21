'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. Simple projects can be completed in as little as 2-3 weeks, while more complex solutions may take several months. This includes discovery, design, development, testing, and deployment. We provide a detailed timeline during our initial consultation based on your specific requirements.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing is project-based and depends on scope, complexity, and your specific requirements. Projects start from $600 USD (approximately 93,000 JMD) and scale upward depending on features and complexity. We offer transparent pricing with no hidden fees. Use our cost calculator or schedule a consultation for a detailed quote.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes! Every project includes 30 days of post-launch support. We also offer monthly maintenance packages starting at $500/month, which include updates, security monitoring, performance optimization, and priority support.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and cloud platforms (AWS, Vercel). We choose the best tech stack for your specific needs, prioritizing performance, scalability, and maintainability.',
  },
  {
    question: 'Can you work with our existing website or do we need to start from scratch?',
    answer: 'We can do both! We can redesign and rebuild your existing site, migrate to a new platform, or make targeted improvements. During discovery, we will assess your current setup and recommend the best approach for your goals and budget.',
  },
  {
    question: 'How involved do we need to be during the project?',
    answer: 'We designed our process to respect your time. You will have weekly check-ins (30-60 minutes) and need to provide feedback at key milestones. We handle the heavy lifting while keeping you informed and involved in important decisions.',
  },
  {
    question: 'What if we need changes after launch?',
    answer: 'The first 30 days post-launch include unlimited minor tweaks and bug fixes. For larger changes or new features, we can provide a quote or set up a monthly retainer. We are committed to your long-term success.',
  },
  {
    question: 'Do you provide hosting and domain services?',
    answer: 'We recommend and can set up hosting on premium platforms like Vercel or AWS, but you maintain ownership. We will guide you through the entire setup process and provide documentation. Hosting typically costs $20-200/month depending on traffic.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Everything you need to know about working with us
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-6 h-6 text-zd-royal-blue dark:text-zd-electric-cyan flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
            Still have questions?
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            We are here to help. Schedule a free consultation to discuss your project.
          </p>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center text-zd-royal-blue dark:text-zd-electric-cyan font-semibold hover:underline"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
