'use client';

import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ArrowRightIcon, CalendarIcon, SparklesIcon } from '@heroicons/react/24/outline';

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
      {/* Primary CTA */}
      <Button
        size="lg"
        variant="primary"
        onClick={() => handleCTAClick('assessment', 'questionnaire')}
        className="w-full sm:w-auto min-w-[260px] group"
        leftIcon={<SparklesIcon className="w-5 h-5" />}
        rightIcon={
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        }
      >
        Get Free Project Assessment
      </Button>

      {/* Secondary CTA */}
      <Button
        size="lg"
        variant="secondary"
        onClick={() => handleCTAClick('call', 'calendar')}
        className="w-full sm:w-auto min-w-[240px]"
        leftIcon={<CalendarIcon className="w-5 h-5" />}
      >
        Schedule Strategy Call
      </Button>

      {/* Tertiary CTA */}
      {showPortfolioLink && (
        <a
          href="/portfolio"
          className="font-semibold text-zd-royal-blue hover:text-zd-electric-cyan transition-colors underline underline-offset-4 text-lg"
          onClick={() => trackEvent('cta_clicked', { action: 'portfolio', context })}
        >
          View Our Work
        </a>
      )}
    </div>
  );
}
