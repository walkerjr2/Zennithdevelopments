'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useContactModal } from '@/hooks/useContactModal';
import { ContactPathSelector } from './ContactPathSelector';
import { ProjectQuestionnaire } from './ProjectQuestionnaire';
import { CalendarBooking } from './CalendarBooking';
import { CostCalculator } from './CostCalculator';
import { QuickContactForm } from './QuickContactForm';

export function ContactModal() {
  const { isOpen, modalType, closeModal } = useContactModal();

  const renderContent = () => {
    switch (modalType) {
      case 'questionnaire':
        return <ProjectQuestionnaire />;
      case 'calendar':
        return <CalendarBooking />;
      case 'calculator':
        return <CostCalculator />;
      case 'quick':
        return <QuickContactForm />;
      default:
        return <ContactPathSelector />;
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl transition-all">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors p-2"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Content */}
                {renderContent()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
