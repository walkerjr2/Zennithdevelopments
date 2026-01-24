'use client';

import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ArrowRightIcon, CalendarIcon, SparklesIcon, CalculatorIcon } from '@heroicons/react/24/outline';

interface CTAClusterProps {
  context?: string;
  showPortfolioLink?: boolean;
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'stacked';
}

export function CTACluster({
  context = 'hero',
  showPortfolioLink = true,
  className = '',
  variant = 'horizontal',
}: CTAClusterProps) {
  const { openModal } = useContactModal();
  const { trackEvent } = useAnalytics();

  const handleCTAClick = (action: string, path: any) => {
    trackEvent('cta_clicked', {
      action,
      context,
      location: typeof window !== 'undefined' ? window.location.pathname : '',
    });
    openModal(path);
  };

  const layoutClasses = {
    horizontal: 'flex flex-col sm:flex-row gap-4 items-center justify-center',
    vertical: 'flex flex-col gap-4 items-stretch',
    stacked: 'flex flex-col gap-3 items-center',
  };

  return (
    <div className={`${layoutClasses[variant]} ${className}`}>
      {/* Primary CTA - Opens choice between Questionnaire or Calculator */}
      <Button
        size="lg"
        variant="primary"
        onClick={() => handleCTAClick('assessment', 'path-selector')}
        className="w-full sm:w-auto min-w-[240px] group"
        leftIcon={<SparklesIcon className="w-5 h-5" />}
        rightIcon={
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        }
      >
        Get Free Assessment
      </Button>

      {/* Secondary CTA - Direct to Calendar */}
      <Button
        size="lg"
        variant="secondary"
        onClick={() => handleCTAClick('call', 'calendar')}
        className="w-full sm:w-auto min-w-[240px]"
        leftIcon={<CalendarIcon className="w-5 h-5" />}
      >
        Schedule Strategy Call
      </Button>

      {/* Portfolio Link */}
      {showPortfolioLink && (
        <a
          href="/#work"
          className="font-semibold text-zd-royal-blue dark:text-zd-electric-cyan hover:text-zd-electric-cyan dark:hover:text-zd-bright-cyan transition-colors underline underline-offset-4 text-lg"
          onClick={() => trackEvent('cta_clicked', { action: 'portfolio', context })}
        >
          View Our Work
        </a>
      )}
    </div>
  );
}
