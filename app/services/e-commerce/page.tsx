'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/contact/ContactModal';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { 
  ShoppingCartIcon, 
  CheckCircleIcon,
  CreditCardIcon,
  ChartBarIcon,
  TruckIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function EcommercePage() {
  const { openModal } = useContactModal();

  const benefits = [
    {
      icon: CreditCardIcon,
      title: 'Secure Payments',
      description: 'Multiple payment gateways with PCI-compliant security'
    },
    {
      icon: ChartBarIcon,
      title: 'Sales Analytics',
      description: 'Track performance with detailed reports and insights'
    },
    {
      icon: TruckIcon,
      title: 'Shipping Integration',
      description: 'Automated shipping calculations and tracking'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Fraud Protection',
      description: 'Built-in security to protect your business and customers'
    }
  ];

  const features = [
    'Product Catalog Management',
    'Shopping Cart & Checkout',
    'Payment Gateway Integration (Stripe, PayPal)',
    'Inventory Management System',
    'Order Processing & Tracking',
    'Customer Account Management',
    'Email Notifications',
    'Discount Codes & Promotions',
    'Product Reviews & Ratings',
    'Advanced Search & Filtering',
    'Mobile-Responsive Design',
    'SEO Optimization for Products'
  ];

  const platforms = [
    {
      name: 'Shopify',
      description: 'Perfect for quick launches with extensive app ecosystem',
      bestFor: ['Quick Setup', 'Small to Medium Stores', 'Built-in Payment Processing']
    },
    {
      name: 'Custom Solution',
      description: 'Full control with tailored features for your business',
      bestFor: ['Unique Requirements', 'Complex Business Logic', 'Full Customization']
    },
    {
      name: 'WooCommerce',
      description: 'WordPress-based solution with flexibility and plugins',
      bestFor: ['Content-Rich Sites', 'WordPress Users', 'Cost-Effective']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Store Planning',
      description: 'Define your product catalog, payment methods, and shipping strategy.'
    },
    {
      number: '02',
      title: 'Design & UX',
      description: 'Create a conversion-optimized design that guides customers to purchase.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build your store with secure payment processing and inventory management.'
    },
    {
      number: '04',
      title: 'Product Setup',
      description: 'Configure products, categories, pricing, and shipping options.'
    },
    {
      number: '05',
      title: 'Testing & Launch',
      description: 'Test all transactions and processes before going live.'
    },
    {
      number: '06',
      title: 'Training & Support',
      description: 'Learn to manage your store with comprehensive training and ongoing support.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Shopify Starter',
      price: 'Starting at $1,200',
      paymentPlan: 'or $200/mo × 6',
      dailyCost: '$3.29/day',
      comparison: 'Less than a coffee ☕',
      description: 'Quick launch with Shopify',
      features: [
        'Shopify theme customization',
        'Up to 50 products',
        'Payment gateway setup',
        'Basic shipping configuration',
        'Mobile responsive',
        '3-4 week delivery',
        '30 days support'
      ]
    },
    {
      name: 'Full E-commerce',
      price: 'Starting at $2,800',
      paymentPlan: 'or $467/mo × 6',
      dailyCost: '$7.67/day',
      comparison: 'Less than lunch 🍔',
      description: 'Complete online store solution',
      features: [
        'Custom design',
        'Unlimited products',
        'Advanced inventory management',
        'Multiple payment gateways',
        'Shipping integrations',
        'Customer accounts',
        '6-8 week delivery',
        '60 days support'
      ],
      featured: true,
      badge: 'Best Value'
    },
    {
      name: 'Enterprise Store',
      price: 'Starting at $6,000',
      paymentPlan: 'Custom payment plans',
      dailyCost: '$16.44/day',
      comparison: 'Less than a part-time employee 💼',
      description: 'Advanced features for scaling',
      features: [
        'Custom platform development',
        'Multi-vendor marketplace',
        'Advanced analytics',
        'CRM integration',
        'API development',
        'Custom workflows',
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
        <section className="pt-32 pb-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                <ShoppingCartIcon className="w-12 h-12" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                E-commerce Solutions
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Conversion-optimized online stores that drive sales. From product catalogs to checkout optimization, we build e-commerce experiences that convert visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('questionnaire', { source: 'ecommerce-page', service: 'E-commerce Solutions' })}
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Start Your Store
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
                Why Choose Our E-commerce Services?
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
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
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

        {/* Platforms Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Choose Your Platform
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                We work with multiple platforms to find the best fit for your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {platform.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Best For:</p>
                    {platform.bestFor.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-zd-electric-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                E-commerce Features
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Everything you need to run a successful online store
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
                  className="flex items-center gap-3 p-4 bg-white dark:bg-slate-700 rounded-lg"
                >
                  <CheckCircleIcon className="w-6 h-6 text-zd-electric-cyan flex-shrink-0" />
                  <span className="text-slate-900 dark:text-white">{feature}</span>
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
                Our E-commerce Process
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                From concept to launch in 6 simple steps
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
                  <div className="text-6xl font-bold text-purple-500/20 mb-4">
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
        <section id="pricing" className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                E-commerce Investment
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-4">
                Start selling online with flexible payment options
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                💡 Most stores see ROI in 3-6 months • Payment plans available • Free consultation
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
                  Risk-Free Store Launch
                </h3>
              </div>
              <p className="text-center text-slate-700 dark:text-slate-300">
                Your store works perfectly before launch, or we keep working until it does - at no extra cost
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
                <CheckCircleIcon className="w-12 h-12 mx-auto text-purple-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Free Store Audit</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Pre-launch optimization included</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-purple-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Payment Plans</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Start selling before paying in full</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl">
                <CheckCircleIcon className="w-12 h-12 mx-auto text-purple-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Store Training</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Learn to manage products & orders</p>
              </div>
            </motion.div>

            {/* Client Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-12 max-w-3xl mx-auto"
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">
                💡 E-commerce Success Stats
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3-6 months</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">average time to ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$2,800</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">most popular package</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">your store sells nonstop</div>
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
                    tier.featured ? 'ring-2 ring-purple-500 shadow-2xl' : 'shadow-lg'
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {tier.badge || 'Most Popular'}
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
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
                        Just {tier.dailyCost} over first year • Less than lunch 🍔
                      </div>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
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
                      source: 'ecommerce-pricing', 
                      service: 'E-commerce Solutions',
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
        <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Launch Your Online Store?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Start selling online with a professional e-commerce solution
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal('questionnaire', { source: 'ecommerce-cta', service: 'E-commerce Solutions' })}
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Start Your Store Today
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
