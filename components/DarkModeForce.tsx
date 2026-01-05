'use client';

import { useEffect } from 'react';

export default function DarkModeForce() {
  useEffect(() => {
    // Force dark mode on mount
    const html = document.documentElement;
    const body = document.body;
    
    // Add dark class
    html.classList.add('dark');
    body.classList.add('dark');
    
    // Force dark color scheme
    html.style.colorScheme = 'dark';
    body.style.colorScheme = 'dark';
    
    // Force dark background and text colors
    html.style.backgroundColor = '#0f172a';
    body.style.backgroundColor = '#0f172a';
    body.style.color = '#f1f5f9';
    
    // Create a meta tag for color-scheme if it doesn't exist
    let metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (!metaColorScheme) {
      metaColorScheme = document.createElement('meta');
      metaColorScheme.setAttribute('name', 'color-scheme');
      metaColorScheme.setAttribute('content', 'dark');
      document.head.appendChild(metaColorScheme);
    }
    
    // Override any system preference listeners
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Always force dark, ignore system preference
      html.classList.add('dark');
      body.classList.add('dark');
      html.style.colorScheme = 'dark';
      body.style.colorScheme = 'dark';
      html.style.backgroundColor = '#0f172a';
      body.style.backgroundColor = '#0f172a';
    };
    
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return null;
}
