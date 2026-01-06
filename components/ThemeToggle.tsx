'use client';

import { useEffect, useState } from 'react';
import { MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  // Force dark mode on mount
  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const body = document.body;
    
    // Always apply dark theme
    root.classList.add('dark');
    root.classList.remove('light');
    body.classList.add('dark');
    body.classList.remove('light');
    
    root.style.colorScheme = 'dark';
    body.style.colorScheme = 'dark';
    
    localStorage.setItem('theme', 'dark');
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-slate-800 animate-pulse" />
    );
  }

  // Display as locked dark mode indicator (non-interactive)
  return (
    <div
      className="relative w-10 h-10 rounded-lg bg-slate-700 border border-slate-600 flex items-center justify-center cursor-not-allowed opacity-75"
      title="Dark mode (locked)"
    >
      <MoonIcon className="w-5 h-5 text-blue-400" />
    </div>
  );
}
