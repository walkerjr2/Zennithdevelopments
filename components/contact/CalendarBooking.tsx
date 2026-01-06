'use client';

import { CalendlyEmbed } from '@/components/CalendlyEmbed';

export function CalendarBooking() {
  return (
    <div className="px-6 py-4">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Schedule a Strategy Call
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Book a free 30-minute consultation to discuss your project goals and requirements.
      </p>

      {/* Calendly Embed */}
      <div className="rounded-lg overflow-hidden" style={{ minHeight: '650px' }}>
        <CalendlyEmbed
          url="https://calendly.com/zennithdevelopments/30min"
        />
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4 text-center">
        All consultations are free and no-obligation. We respect your time and privacy.
      </p>
    </div>
  );
}
