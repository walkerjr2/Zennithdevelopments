'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { useContactModal } from '@/hooks/useContactModal';
import { useAnalytics } from '@/hooks/useAnalytics';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'Process', href: '/#process' },
  { name: 'About', href: '/about' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (name: string, href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('navigation_click', { section: name });
    setMobileMenuOpen(false);
    
    // Handle anchor links on the same page
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Handle anchor links with paths (e.g., /#services from /about page)
    else if (href.includes('/#')) {
      // Let the browser navigate to the page, then scroll
      // The target page will handle the scroll on load
    }
    // For regular page links like /about, let the default behavior happen
  };

  const handleGetStarted = () => {
    trackEvent('cta_click', { location: 'navigation', type: 'get_started' });
    openModal('questionnaire', { source: 'navigation' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo width={180} height={54} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(item.name, item.href, e);
                }}
                className="text-slate-600 dark:text-slate-400 hover:text-zd-royal-blue dark:hover:text-zd-electric-cyan transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="primary" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(item.name, item.href, e);
                  }}
                  className="block text-lg text-slate-600 dark:text-slate-400 hover:text-zd-royal-blue dark:hover:text-zd-electric-cyan transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="primary" onClick={handleGetStarted} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
