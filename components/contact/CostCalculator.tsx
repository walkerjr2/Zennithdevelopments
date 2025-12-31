'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useContactModal } from '@/hooks/useContactModal';
import { 
  CurrencyDollarIcon, 
  CalendarIcon, 
  UserGroupIcon,
  CogIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  CheckCircleIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

const projectTypes = [
  { value: 'landing', label: 'Landing Page', basePrice: 600, weeks: 2 },
  { value: 'business', label: 'Business Website', basePrice: 1500, weeks: 4 },
  { value: 'ecommerce', label: 'E-commerce Store', basePrice: 3500, weeks: 8 },
  { value: 'webapp', label: 'Web Application', basePrice: 5000, weeks: 12 },
  { value: 'custom', label: 'Custom Solution', basePrice: 8000, weeks: 16 },
];

const features = [
  { value: 'cms', label: 'Content Management', price: 300 },
  { value: 'auth', label: 'User Authentication', price: 500 },
  { value: 'api', label: 'API Integration', price: 400 },
  { value: 'payment', label: 'Payment Processing', price: 450 },
  { value: 'analytics', label: 'Advanced Analytics', price: 350 },
  { value: 'seo', label: 'SEO Optimization', price: 250 },
];

export function CostCalculator() {
  const [projectType, setProjectType] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [pages, setPages] = useState(5);
  const [showResults, setShowResults] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Contact form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  
  const { trackEvent } = useAnalytics();
  const { closeModal } = useContactModal();

  const selectedProject = projectTypes.find((p) => p.value === projectType);
  
  const calculateCost = () => {
    if (!selectedProject) return 0;
    
    const basePrice = selectedProject.basePrice;
    const featuresPrice = selectedFeatures.reduce((sum, feature) => {
      const feat = features.find((f) => f.value === feature);
      return sum + (feat?.price || 0);
    }, 0);
    const pagesPrice = Math.max(0, (pages - 5)) * 500; // $500 per additional page over 5
    
    return basePrice + featuresPrice + pagesPrice;
  };

  const calculateTimeline = () => {
    if (!selectedProject) return 0;
    
    const baseWeeks = selectedProject.weeks;
    const featureWeeks = selectedFeatures.length * 0.5;
    const pageWeeks = Math.max(0, (pages - 5)) * 0.2;
    
    return Math.ceil(baseWeeks + featureWeeks + pageWeeks);
  };

  const handleCalculate = () => {
    setShowResults(true);
    trackEvent('calculator_used', {
      projectType,
      features: selectedFeatures.length,
      estimatedCost: calculateCost(),
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedProject = projectTypes.find((p) => p.value === projectType);
    const selectedFeaturesList = selectedFeatures.map(f => {
      const feature = features.find(feat => feat.value === f);
      return feature ? `${feature.label} (+$${feature.price})` : f;
    });

    const calculationData = {
      type: 'cost-calculator',
      name,
      email,
      phone,
      company,
      projectType: selectedProject?.label || projectType,
      estimatedCost: calculateCost(),
      estimatedWeeks: calculateTimeline(),
      numberOfPages: pages,
      selectedFeatures: selectedFeaturesList,
      basePrice: selectedProject?.basePrice || 0,
      message,
      calculationDetails: {
        projectType: selectedProject?.label,
        basePrice: selectedProject?.basePrice,
        baseDuration: selectedProject?.weeks,
        pages,
        features: selectedFeaturesList,
        totalCost: calculateCost(),
        totalWeeks: calculateTimeline()
      }
    };

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(calculationData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        trackEvent('quote_request_submitted', {
          projectType,
          estimatedCost: calculateCost(),
          source: 'calculator'
        });
        
        // Close modal after 2 seconds
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        alert('Something went wrong. Please try again or email us directly.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const estimatedCost = calculateCost();
  const estimatedWeeks = calculateTimeline();

  return (
    <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Project Cost Calculator
      </h3>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Get an instant estimate for your project
      </p>

      <div className="space-y-6">
        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
            Project Type *
          </label>
          <div className="grid grid-cols-1 gap-3">
            {projectTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setProjectType(type.value)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  projectType === type.value
                    ? 'border-zd-royal-blue dark:border-zd-electric-cyan bg-zd-royal-blue/5 dark:bg-zd-electric-cyan/5'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <div className="font-semibold text-slate-900 dark:text-white">
                  {type.label}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Starting at ${type.basePrice.toLocaleString()} · {type.weeks} weeks
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Number of Pages */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
            Number of Pages: {pages}
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>1 page</span>
            <span>50+ pages</span>
          </div>
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
            Additional Features
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature) => (
              <label
                key={feature.value}
                className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(feature.value)}
                  onChange={() => handleFeatureToggle(feature.value)}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-zd-royal-blue focus:ring-zd-royal-blue"
                />
                <div className="flex-1">
                  <div className="font-medium text-slate-900 dark:text-white text-sm">
                    {feature.label}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    +${feature.price.toLocaleString()}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleCalculate}
          disabled={!projectType}
        >
          Calculate Estimate
        </Button>

        {/* Results */}
        <AnimatePresence mode="wait">
          {showResults && estimatedCost > 0 && !showContactForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-br from-zd-royal-blue to-zd-electric-cyan rounded-2xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-4">Your Estimated Investment</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CurrencyDollarIcon className="w-6 h-6 mb-2" />
                  <div className="text-3xl font-bold">
                    ${estimatedCost.toLocaleString()}
                  </div>
                  <div className="text-sm opacity-80">Total Investment</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CalendarIcon className="w-6 h-6 mb-2" />
                  <div className="text-3xl font-bold">{estimatedWeeks}</div>
                  <div className="text-sm opacity-80">Weeks to Launch</div>
                </div>
              </div>

              <p className="text-sm opacity-90 mb-4">
                💡 Want a detailed quote? Share your contact info and we'll send you a personalized proposal within 24 hours.
              </p>

              <Button
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => setShowContactForm(true)}
              >
                Get Detailed Quote →
              </Button>
            </motion.div>
          )}

          {/* Contact Form */}
          {showContactForm && !submitSuccess && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmitQuote}
              className="space-y-4"
            >
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">Estimated Cost:</span>
                  <span className="font-bold text-zd-royal-blue dark:text-zd-electric-cyan text-lg">
                    ${estimatedCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-slate-600 dark:text-slate-300">Timeline:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {estimatedWeeks} weeks
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan"
                    placeholder="John Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan"
                    placeholder="(876) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Additional Details
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-zd-royal-blue dark:focus:ring-zd-electric-cyan resize-none"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  size="md"
                  className="flex-1"
                  onClick={() => setShowContactForm(false)}
                  disabled={isSubmitting}
                >
                  ← Back
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Quote Request
                      <PaperAirplaneIcon className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          )}

          {/* Success Message */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center"
            >
              <CheckCircleIcon className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">Quote Request Sent! 🎉</h4>
              <p className="text-green-50 mb-4">
                We've received your request and will send you a detailed proposal within 24 hours.
              </p>
              <p className="text-sm text-green-100">
                Check your email: <span className="font-semibold">{email}</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!showContactForm && (
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            *Estimates are approximate and may vary based on specific requirements
          </p>
        )}
      </div>
    </div>
  );
}
