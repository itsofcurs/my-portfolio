'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations using IntersectionObserver.
 * Adds 'revealed' class to elements with 'reveal' class when they enter the viewport.
 */
export function useScrollReveal(threshold: number = 0.15) {
  const containerRef = useRef<HTMLDivElement>(null);

  const observe = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    const cleanup = observe();
    return cleanup;
  }, [observe]);

  return containerRef;
}
