'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/contact/ContactModal';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { 
  CogIcon, 
  CheckCircleIcon,
  CloudIcon,
  CircleStackIcon,
  BoltIcon,
  ArrowPathIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function IntegrationsPage() {
  const { openModal } = useContactModal();

  const benefits = [
    {
      icon: BoltIcon,
      title: 'Automation',
      description: 'Automate workflows and eliminate manual data entry'
    },
    {
      icon: ArrowPathIcon,
      title: 'Real-time Sync',
      description: 'Keep your systems synchronized with instant updates'
    },
    {
      icon: CloudIcon,
      title: 'Cloud-Based',
      description: 'Scalable integrations that grow with your business'
    },
    {
      icon: CircleStackIcon,
      title: 'Data Security',
      description: 'Secure API connections with encryption and monitoring'
    }
  ];

  const integrationTypes = [
    {
      title: 'CRM Integration',
      description: 'Connect your website to Salesforce, HubSpot, or other CRM systems',
      examples: ['Lead capture automation', 'Contact synchronization', 'Sales pipeline updates', 'Customer data management']
    },
    {
      title: 'Payment Systems',
      description: 'Integrate payment gateways and financial services',
      examples: ['Stripe & PayPal', 'Subscription billing', 'Invoice generation', 'Payment reconciliation']
    },
    {
      title: 'Marketing Tools',
      description: 'Connect email marketing and analytics platforms',
      examples: ['MailChimp integration', 'Google Analytics', 'Social media APIs', 'Ad platform tracking']
    },
    {
      title: 'ERP Systems',
      description: 'Bridge your website with business management software',
      examples: ['Inventory sync', 'Order management', 'Accounting integration', 'Supply chain data']
    },
    {
      title: 'Shipping & Logistics',
      description: 'Automate shipping and fulfillment processes',
      examples: ['Carrier APIs', 'Real-time tracking', 'Label generation', 'Inventory updates']
    },
    {
      title: 'Custom APIs',
      description: 'Build bespoke integrations for unique business needs',
      examples: ['Third-party services', 'Legacy system connections', 'Custom webhooks', 'Data transformation']
    }
  ];

  const features = [
    'RESTful API Development',
    'GraphQL Implementation',
    'Webhook Configuration',
    'OAuth & Authentication',
    'Data Migration Services',
    'Real-time Data Synchronization',
    'Error Handling & Logging',
    'API Documentation',
    'Rate Limiting & Throttling',
    'Monitoring & Alerts',
    'Legacy System Integration',
    'Microservices Architecture'
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'Understand your systems, data flow requirements, and business processes.'
    },
    {
      number: '02',
      title: 'Architecture Design',
      description: 'Design the integration architecture with security and scalability in mind.'
    },
    {
      number: '03',
      title: 'API Development',
      description: 'Build robust APIs with proper authentication and error handling.'
    },
    {
      number: '04',
      title: 'Data Mapping',
      description: 'Map data fields between systems and handle transformations.'
    },
    {
      number: '05',
      title: 'Testing & Validation',
      description: 'Thoroughly test all integration points and data flows.'
    },
    {
      number: '06',
      title: 'Deployment & Monitoring',
      description: 'Deploy with monitoring and alerting for ongoing reliability.'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce + Inventory',
      description: 'Sync your online store with inventory management systems for real-time stock updates',
      impact: 'Eliminate overselling and manual inventory updates'
    },
    {
      title: 'Website + CRM',
      description: 'Automatically capture leads from your website into your CRM',
      impact: 'Faster follow-up and better lead tracking'
    },
    {
      title: 'Booking + Calendar',
      description: 'Connect appointment booking with Google Calendar or other scheduling tools',
      impact: 'Prevent double bookings and automate confirmations'
    },
    {
      title: 'Forms + Email Marketing',
      description: 'Add newsletter subscribers directly to your email marketing platform',
      impact: 'Streamlined list building and automated campaigns'
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic Integration',
      price: 'Starting at $1,200',
      paymentPlan: 'or $200/mo × 6',
      dailyCost: '$3.29/day',
      comparison: 'Saves 10+ hours/week of manual work',
      description: 'Single integration with standard APIs',
      features: [
        'One API integration',
        'Basic data mapping',
        'Error handling',
        'Documentation',
        '3-4 week delivery',
        '30 days support'
      ]
    },
    {
      name: 'Multi-Integration',
      price: 'Starting at $3,500',
      paymentPlan: 'or $584/mo × 6',
      dailyCost: '$9.59/day',
      comparison: 'ROI in 2-3 months from time saved',
      description: 'Multiple system connections',
      features: [
        '3-5 API integrations',
        'Advanced data mapping',
        'Webhook setup',
        'Real-time sync',
        'Monitoring dashboard',
        '6-8 week delivery',
        '60 days support'
      ],
      featured: true,
      badge: 'Best Value'
    },
    {
      name: 'Enterprise Integration',
      price: 'Starting at $5,500',
      paymentPlan: 'Custom payment plans',
      dailyCost: '$15.07/day',
      comparison: 'Less than hiring a specialist 💼',
      description: 'Complex enterprise solutions',
      features: [
        'Unlimited integrations',
        'Custom middleware',
        'Legacy system support',
        'Advanced security',
        'Dedicated support',
        'SLA guarantees',
        '12-16 week delivery',
        '90 days support'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 mb-6">
                <CogIcon className="w-12 h-12" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Custom Integrations
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Connect your tools and automate workflows. Seamlessly integrate CRM, ERP, payment systems, and third-party APIs to streamline your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('questionnaire', { source: 'integrations-page', service: 'Custom Integrations' })}
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  Start Integration
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
                Why Integrate Your Systems?
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
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 mb-4">
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

        {/* Integration Types Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Types of Integrations We Build
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Connect any system to streamline your workflows
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrationTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2 text-sm">
                        <CheckCircleIcon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300">{example}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Real-World Use Cases
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                See how integrations can transform your business operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-700 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {useCase.description}
                  </p>
                  <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                    <BoltIcon className="w-5 h-5" />
                    <span className="font-semibold text-sm">{useCase.impact}</span>
                  </div>
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
                Integration Capabilities
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Comprehensive API and integration services
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
                  <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
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
                Our Integration Process
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                A systematic approach to reliable integrations
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
                  <div className="text-6xl font-bold text-orange-500/20 mb-4">
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
                Integration Investment
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-4">
                Automate workflows and save time with flexible pricing
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                💡 Typical ROI in 2-3 months • Payment plans available • Free consultation
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
                  Integration Guarantee
                </h3>
              </div>
              <p className="text-center text-slate-700 dark:text-slate-300">
                Your systems will communicate flawlessly, or we'll fix it free - no excuses
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
                <CheckCircleIcon className="w-12 h-12 mx-auto text-orange-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Free System Audit</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Review your current workflow first</p>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-orange-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Flexible Terms</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Pay as systems start talking</p>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-orange-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Ongoing Monitoring</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">60 days of uptime monitoring</p>
              </div>
            </motion.div>

            {/* Client Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 mb-12 max-w-3xl mx-auto"
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">
                💡 Integration ROI Stats
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">10+ hrs/wk</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">manual work eliminated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">2-3 months</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">typical time to ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">$3,800</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">average investment</div>
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
                  className={`relative bg-white dark:bg-slate-900 rounded-2xl p-8 ${
                    tier.featured ? 'ring-2 ring-orange-500 shadow-2xl' : 'shadow-lg'
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {tier.badge || 'Most Popular'}
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
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
                        Just {tier.dailyCost} over first year • Less than Netflix 📺
                      </div>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
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
                      source: 'integrations-pricing', 
                      service: 'Custom Integrations',
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
        <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Connect Your Systems?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Let's automate your workflows and streamline your operations
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal('questionnaire', { source: 'integrations-cta', service: 'Custom Integrations' })}
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Start Your Integration
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
