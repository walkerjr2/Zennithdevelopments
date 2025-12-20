'use client';

export function useAnalytics() {
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (typeof window === 'undefined') return;

    const eventData = {
      event,
      properties: {
        ...properties,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        referrer: document.referrer,
      },
    };

    // Send to analytics service (Google Analytics, Plausible, etc.)
    if (window.gtag) {
      window.gtag('event', event, properties);
    }

    // Send to custom API endpoint
    fetch('/api/analytics/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    }).catch(console.error);

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', eventData);
    }
  };

  const trackPageView = (url: string) => {
    trackEvent('page_view', { url });
  };

  const trackConversion = (type: string, value?: number) => {
    trackEvent('conversion', { type, value });
  };

  return { trackEvent, trackPageView, trackConversion };
}

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
