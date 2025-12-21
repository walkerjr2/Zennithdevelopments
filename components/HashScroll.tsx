'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on homepage
    if (pathname === '/') {
      // Check if there's a hash in the URL
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [pathname]);

  return null;
}
