'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/contact/ContactModal';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { 
  RocketLaunchIcon, 
  CheckCircleIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function PerformancePage() {
  const { openModal } = useContactModal();

  const benefits = [
    {
      icon: BoltIcon,
      title: 'Faster Load Times',
      description: 'Improve page speed for better user experience and SEO rankings'
    },
    {
      icon: ChartBarIcon,
      title: 'Higher Conversions',
      description: 'Every second counts - faster sites convert more visitors'
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Better SEO',
      description: 'Google prioritizes fast, well-optimized websites in search results'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Excellence',
      description: 'Optimized Core Web Vitals for perfect mobile performance'
    }
  ];

  const optimizationAreas = [
    {
      title: 'Speed Optimization',
      description: 'Make your website lightning fast',
      improvements: [
        'Image optimization & lazy loading',
        'Code minification & compression',
        'Browser caching strategies',
        'CDN implementation',
        'Database query optimization',
        'Reduce server response time'
      ]
    },
    {
      title: 'SEO Enhancement',
      description: 'Boost your search engine rankings',
      improvements: [
        'Technical SEO audit',
        'Meta tags optimization',
        'Structured data markup',
        'XML sitemap generation',
        'Mobile-first indexing',
        'Page speed optimization'
      ]
    },
    {
      title: 'Core Web Vitals',
      description: 'Perfect your Google performance metrics',
      improvements: [
        'Largest Contentful Paint (LCP)',
        'First Input Delay (FID)',
        'Cumulative Layout Shift (CLS)',
        'First Contentful Paint (FCP)',
        'Time to Interactive (TTI)',
        'Total Blocking Time (TBT)'
      ]
    },
    {
      title: 'Conversion Rate Optimization',
      description: 'Turn more visitors into customers',
      improvements: [
        'User journey analysis',
        'A/B testing recommendations',
        'Call-to-action optimization',
        'Form optimization',
        'Mobile UX improvements',
        'Trust signal enhancement'
      ]
    },
    {
      title: 'UX/UI Audit',
      description: 'Enhance user experience and design',
      improvements: [
        'Navigation analysis',
        'Accessibility compliance',
        'Mobile responsiveness',
        'Visual hierarchy',
        'User flow optimization',
        'Design consistency'
      ]
    },
    {
      title: 'Security Enhancement',
      description: 'Protect your website and users',
      improvements: [
        'SSL/HTTPS implementation',
        'Security headers',
        'Vulnerability scanning',
        'Malware protection',
        'DDoS mitigation',
        'Regular security updates'
      ]
    }
  ];

  const features = [
    'Comprehensive Performance Audit',
    'Speed Optimization',
    'SEO Analysis & Implementation',
    'Core Web Vitals Optimization',
    'Mobile Performance Enhancement',
    'Image & Asset Optimization',
    'Code Refactoring',
    'Database Optimization',
    'Caching Strategy',
    'CDN Setup & Configuration',
    'Analytics & Monitoring Setup',
    'Ongoing Performance Monitoring'
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Comprehensive Audit',
      description: 'Deep analysis of your site\'s performance, SEO, and user experience using industry-standard tools.'
    },
    {
      number: '02',
      title: 'Detailed Report',
      description: 'Receive a comprehensive report with findings, issues, and prioritized recommendations.'
    },
    {
      number: '03',
      title: 'Optimization Plan',
      description: 'Create a strategic roadmap for improvements based on impact and implementation effort.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Execute optimizations systematically, testing each change for maximum effectiveness.'
    },
    {
      number: '05',
      title: 'Testing & Validation',
      description: 'Verify improvements with before/after metrics and real-world testing.'
    },
    {
      number: '06',
      title: 'Monitoring & Reporting',
      description: 'Set up ongoing monitoring and provide performance reports with actionable insights.'
    }
  ];

  const metrics = [
    {
      label: 'Average Speed Improvement',
      value: '40-60%',
      description: 'Reduction in page load time'
    },
    {
      label: 'SEO Score Increase',
      value: '+15-30',
      description: 'Points on Lighthouse SEO score'
    },
    {
      label: 'Conversion Rate Boost',
      value: '10-25%',
      description: 'Increase in conversions'
    },
    {
      label: 'Mobile Performance',
      value: '90+',
      description: 'Google PageSpeed score'
    }
  ];

  const pricingTiers = [
    {
      name: 'Quick Audit',
      price: 'Starting at $500',
      paymentPlan: 'One-time payment',
      dailyCost: '$1.37/day',
      comparison: 'Know exactly what needs fixing',
      description: 'Essential performance assessment',
      features: [
        'Performance audit report',
        'Core Web Vitals analysis',
        'SEO health check',
        'Prioritized recommendations',
        'Basic optimization tips',
        '1 week delivery',
        'Report only (no implementation)'
      ]
    },
    {
      name: 'Full Optimization',
      price: 'Starting at $1,800',
      paymentPlan: 'or $300/mo × 6',
      dailyCost: '$4.93/day',
      comparison: 'Less than a coffee ☕',
      description: 'Complete performance overhaul',
      features: [
        'Comprehensive audit',
        'Speed optimization',
        'SEO improvements',
        'Core Web Vitals fixes',
        'Image optimization',
        'Code refactoring',
        '4-6 week delivery',
        '60 days support'
      ],
      featured: true,
      badge: 'Best Results'
    },
    {
      name: 'Ongoing Performance',
      price: '$600/month',
      paymentPlan: 'Cancel anytime',
      dailyCost: '$20/day',
      comparison: 'Less than Netflix 📺',
      description: 'Continuous monitoring & improvement',
      features: [
        'Monthly performance audits',
        'Continuous optimization',
        'SEO monitoring',
        'Performance reports',
        'Priority support',
        'Proactive improvements',
        'Monthly updates',
        'Quarterly strategy reviews'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                <RocketLaunchIcon className="w-12 h-12" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Performance Optimization
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Speed up existing websites and boost conversions. Comprehensive SEO, Core Web Vitals optimization, and user experience audits to help your site rank higher and convert better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('questionnaire', { source: 'performance-page', service: 'Performance Optimization' })}
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  Get Audit
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
                Why Optimize Your Website?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Performance directly impacts your bottom line
              </p>
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
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Expected Results
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Real improvements you can measure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl"
                >
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {metric.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Areas Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What We Optimize
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Comprehensive improvements across all critical areas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {optimizationAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-700 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.improvements.map((improvement) => (
                      <li key={improvement} className="flex items-start gap-2 text-sm">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-400">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Our Optimization Process
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Systematic approach to measurable improvements
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
                  <div className="text-6xl font-bold text-green-500/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Optimization Investment
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4">
                Boost conversions and rankings with measurable results
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                💡 Average 25% conversion increase • Flexible payment plans • Free consultation
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
                  Performance Guarantee
                </h3>
              </div>
              <p className="text-center text-slate-600 dark:text-slate-400">
                See measurable improvements in speed and rankings, or get a full refund
              </p>
            </motion.div>

            {/* What's Included Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-green-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Free Audit</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Comprehensive site analysis first</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-green-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Pay Over Time</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">See results before final payment</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-green-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Before/After Report</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Proof of improvement metrics</p>
              </div>
            </motion.div>

            {/* Client Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-12 max-w-3xl mx-auto"
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">
                💡 Average Results from Optimization
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">40-60%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">faster load times</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">25%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">conversion increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">+15-30</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">SEO score points</div>
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
                    tier.featured ? 'ring-2 ring-green-500 shadow-2xl' : 'shadow-lg'
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {tier.badge || 'Most Popular'}
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
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
                        Just {tier.dailyCost} over first year • Less than takeout 🍕
                      </div>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-400 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.featured ? 'primary' : 'secondary'}
                    className="w-full"
                    onClick={() => openModal('tier-confirmation', { 
                      source: 'performance-pricing', 
                      service: 'Performance Optimization',
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
        <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Boost Your Website Performance?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Get a comprehensive audit and start seeing improvements today
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal('questionnaire', { source: 'performance-cta', service: 'Performance Optimization' })}
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Get Your Free Audit Quote
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
