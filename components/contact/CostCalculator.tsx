'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useAnalytics } from '@/hooks/useAnalytics';
import { 
  CurrencyDollarIcon, 
  CalendarIcon, 
  UserGroupIcon,
  CogIcon 
} from '@heroicons/react/24/outline';

const projectTypes = [
  { value: 'landing', label: 'Landing Page', basePrice: 5000, weeks: 2 },
  { value: 'business', label: 'Business Website', basePrice: 15000, weeks: 8 },
  { value: 'ecommerce', label: 'E-commerce Store', basePrice: 30000, weeks: 12 },
  { value: 'webapp', label: 'Web Application', basePrice: 50000, weeks: 16 },
  { value: 'custom', label: 'Custom Solution', basePrice: 75000, weeks: 20 },
];

const features = [
  { value: 'cms', label: 'Content Management', price: 3000 },
  { value: 'auth', label: 'User Authentication', price: 5000 },
  { value: 'api', label: 'API Integration', price: 4000 },
  { value: 'payment', label: 'Payment Processing', price: 4500 },
  { value: 'analytics', label: 'Advanced Analytics', price: 3500 },
  { value: 'seo', label: 'SEO Optimization', price: 2500 },
];

export function CostCalculator() {
  const [projectType, setProjectType] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [pages, setPages] = useState(5);
  const [showResults, setShowResults] = useState(false);
  const { trackEvent } = useAnalytics();

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
        {showResults && estimatedCost > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
              This is a rough estimate. Schedule a consultation for a detailed quote tailored to your needs.
            </p>

            <Button
              variant="secondary"
              size="md"
              className="w-full"
              onClick={() => {
                window.location.href = 'mailto:hello@zennithdevelopments.com?subject=Project Quote Request';
              }}
            >
              Request Detailed Quote
            </Button>
          </motion.div>
        )}

        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
          *Estimates are approximate and may vary based on specific requirements
        </p>
      </div>
    </div>
  );
}
