'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/contact/ContactModal';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { 
  CodeBracketIcon, 
  CheckCircleIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  BoltIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export default function WebDevelopmentPage() {
  const { openModal } = useContactModal();

  const benefits = [
    {
      icon: BoltIcon,
      title: 'Lightning Fast',
      description: 'Built with modern frameworks like Next.js and React for optimal performance'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile First',
      description: 'Responsive designs that work perfectly on all devices and screen sizes'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Reliable',
      description: 'Industry-standard security practices and reliable hosting solutions'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, from startup to enterprise'
    }
  ];

  const features = [
    'Custom React/Next.js Applications',
    'TypeScript for Type Safety',
    'RESTful & GraphQL API Integration',
    'Database Design & Implementation',
    'Cloud Deployment (AWS, Vercel, etc.)',
    'Progressive Web Apps (PWA)',
    'Server-Side Rendering (SSR)',
    'Static Site Generation (SSG)',
    'Authentication & Authorization',
    'Content Management Systems',
    'Real-time Features (WebSockets)',
    'Third-Party API Integration'
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements.'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes to visualize the user experience.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build your application using modern frameworks with clean, maintainable code.'
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing across devices and browsers to ensure quality and performance.'
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'Deploy to production with monitoring and analytics set up for ongoing insights.'
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: '30 days of post-launch support included, with ongoing maintenance packages available.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Landing Page',
      price: 'Starting at $600',
      paymentPlan: 'or $200/mo × 3',
      dailyCost: '$1.64/day',
      comparison: 'Less than one social media campaign',
      description: 'Perfect for showcasing your business online',
      features: [
        'Single responsive page',
        'Contact form integration',
        'Mobile optimized',
        'SEO optimized',
        '2-3 week delivery',
        '30 days support'
      ]
    },
    {
      name: 'Business Website',
      price: 'Starting at $1,200',
      paymentPlan: 'or $200/mo × 6',
      dailyCost: '$3.29/day',
      comparison: 'Less than a coffee ☕',
      description: 'Multi-page site for established businesses',
      features: [
        'Up to 10 pages',
        'Custom design',
        'CMS integration',
        'Contact forms',
        'Analytics setup',
        '4-6 week delivery',
        '30 days support'
      ],
      featured: true,
      badge: 'Most Popular'
    },
    {
      name: 'Custom Application',
      price: 'Starting at $3,500',
      paymentPlan: 'or $584/mo × 6',
      dailyCost: '$9.59/day',
      comparison: 'Less than lunch 🍔',
      description: 'Full-featured web applications',
      features: [
        'Custom functionality',
        'User authentication',
        'Database integration',
        'API development',
        'Admin dashboard',
        '8-12 week delivery',
        '60 days support'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-zd-royal-blue to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                <CodeBracketIcon className="w-12 h-12" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Custom Web Development
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Bespoke web applications built with modern frameworks. Scalable, secure, and optimized for performance to help your business thrive online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('questionnaire', { source: 'web-development-page', service: 'Custom Web Development' })}
                  className="bg-white text-zd-royal-blue hover:bg-gray-100"
                >
                  Start Your Project
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Why Choose Our Web Development Services?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What's Included
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Comprehensive web development services with modern technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                >
                  <CheckCircleIcon className="w-6 h-6 text-zd-electric-cyan flex-shrink-0" />
                  <span className="text-slate-900 dark:text-white">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                A proven methodology to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-zd-electric-cyan/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Investment & Value
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-4">
                Transparent pricing with flexible payment plans
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                💡 Free consultation to discuss your budget • Flexible payment plans available • No hidden fees
              </p>
            </motion.div>

            {/* Guarantee Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-6 mb-12 max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <ShieldCheckIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  100% Satisfaction Guarantee
                </h3>
              </div>
              <p className="text-center text-slate-700 dark:text-slate-300">
                Not happy with the final result? We'll revise until you are - unlimited revisions included
              </p>
            </motion.div>

            {/* What's Included Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-zd-electric-cyan mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Free Consultation</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">30-min strategy call to discuss your needs</p>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-zd-electric-cyan mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Flexible Payments</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Split into manageable monthly installments</p>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-zd-electric-cyan mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">30-Day Support</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Post-launch assistance included free</p>
              </div>
            </motion.div>

            {/* Client Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-12 max-w-3xl mx-auto"
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">
                💡 Real Client Insights
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan">68%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">invest $2,000-$4,000</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan">$2,800</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">average project cost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan">6 months</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">typical payment plan</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white dark:bg-slate-800 rounded-2xl p-8 ${
                    tier.featured ? 'ring-2 ring-zd-electric-cyan shadow-2xl' : 'shadow-lg'
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zd-electric-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {tier.badge || 'Most Popular'}
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-zd-royal-blue dark:text-zd-electric-cyan">
                      {tier.price}
                    </div>
                    {tier.paymentPlan && (
                      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {tier.paymentPlan}
                      </div>
                    )}
                    {tier.comparison && (
                      <div className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">
                        💰 {tier.comparison}
                      </div>
                    )}
                    {tier.dailyCost && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">
                        Just {tier.dailyCost} over first year • Less than a coffee ☕
                      </div>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-zd-electric-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.featured ? 'primary' : 'secondary'}
                    className="w-full"
                    onClick={() => openModal('tier-confirmation', { 
                      source: 'web-development-pricing', 
                      service: 'Custom Web Development',
                      tier: tier.name,
                      price: tier.price
                    })}
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-zd-royal-blue to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Build Your Web Application?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss your project and create something amazing together
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal('questionnaire', { source: 'web-development-cta', service: 'Custom Web Development' })}
                className="bg-white text-zd-royal-blue hover:bg-gray-100"
              >
                Start Your Project Today
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
