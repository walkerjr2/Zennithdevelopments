'use client';

import { motion } from 'framer-motion';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

const timeSlots = [
  { day: 'Monday', date: 'Dec 23', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
  { day: 'Tuesday', date: 'Dec 24', slots: ['9:00 AM', '11:00 AM', '3:00 PM'] },
  { day: 'Wednesday', date: 'Dec 25', slots: ['Holiday - Closed'] },
  { day: 'Thursday', date: 'Dec 26', slots: ['10:00 AM', '1:00 PM', '3:00 PM'] },
  { day: 'Friday', date: 'Dec 27', slots: ['9:00 AM', '2:00 PM', '4:00 PM'] },
];

export function CalendarBooking() {
  const handleCalendlyOpen = () => {
    // In production, integrate with Calendly, Cal.com, or similar
    window.open('https://calendly.com/your-link', '_blank');
  };

  return (
    <div className="px-6 py-4">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Schedule a Call
      </h3>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Book a free 30-minute consultation to discuss your project.
      </p>

      {/* Coming Soon Notice */}
      <div className="bg-zd-electric-cyan/10 border border-zd-electric-cyan/20 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <CalendarDaysIcon className="w-8 h-8 text-zd-royal-blue dark:text-zd-electric-cyan" />
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white">
              Calendar Integration Coming Soon
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              For now, please email us to schedule a call
            </p>
          </div>
        </div>
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={() => {
            window.location.href = 'mailto:hello@zennithdevelopments.com?subject=Schedule Consultation';
          }}
        >
          Email to Schedule
        </Button>
      </div>

      {/* Preview of future calendar UI */}
      <div className="opacity-40 pointer-events-none">
        <div className="space-y-3">
          {timeSlots.slice(0, 3).map((slot, index) => (
            <div
              key={index}
              className="border border-slate-300 dark:border-slate-600 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {slot.day}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {slot.date}
                  </div>
                </div>
                <ClockIcon className="w-5 h-5 text-slate-400" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {slot.slots[0] !== 'Holiday - Closed' ? (
                  slot.slots.map((time, i) => (
                    <button
                      key={i}
                      className="px-3 py-1 text-sm rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <span className="text-sm text-slate-500">{slot.slots[0]}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
        All consultations are free and no-obligation
      </p>
    </div>
  );
}
