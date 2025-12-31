'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CodeBracketIcon, 
  ShoppingCartIcon, 
  CogIcon, 
  RocketLaunchIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Custom Web Development',
    description: 'Bespoke web applications built with modern frameworks. Scalable, secure, and optimized for performance.',
    features: ['React/Next.js', 'TypeScript', 'API Integration', 'Cloud Deployment'],
    color: 'from-blue-500 to-cyan-500',
    link: '/services/web-development',
  },
  {
    icon: ShoppingCartIcon,
    title: 'E-commerce Solutions',
    description: 'Conversion-optimized online stores that drive sales. From product catalogs to checkout optimization.',
    features: ['Shopify/Custom', 'Payment Integration', 'Inventory Management', 'Analytics'],
    color: 'from-purple-500 to-pink-500',
    link: '/services/e-commerce',
  },
  {
    icon: CogIcon,
    title: 'Custom Integrations',
    description: 'Connect your tools and automate workflows. CRM, ERP, payment systems, and third-party APIs.',
    features: ['API Development', 'Webhook Systems', 'Data Migration', 'Automation'],
    color: 'from-orange-500 to-red-500',
    link: '/services/integrations',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Performance Optimization',
    description: 'Speed up existing websites and boost conversions. SEO, Core Web Vitals, and user experience audits.',
    features: ['SEO Optimization', 'Speed Enhancement', 'Conversion Rate', 'UX Audit'],
    color: 'from-green-500 to-emerald-500',
    link: '/services/performance',
  },
];

export function Services() {
  const { openModal } = useContactModal();
  const { trackEvent } = useAnalytics();

  const handleServiceClick = (serviceName: string) => {
    trackEvent('service_click', { service: serviceName });
    openModal('questionnaire', { source: 'services', service: serviceName });
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900">
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
            What We Build
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business goals
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.link}
                onClick={() => trackEvent('service_learn_more', { service: service.title })}
                className="group relative block bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-zd-electric-cyan mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA - Visual indicator only */}
                <div className="flex items-center gap-1 text-zd-royal-blue dark:text-zd-electric-cyan font-semibold">
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Not sure which service fits your needs?
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => {
              trackEvent('cta_click', { location: 'services_bottom' });
              openModal('questionnaire', { source: 'services_cta' });
            }}
          >
            Take Our Quick Assessment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
