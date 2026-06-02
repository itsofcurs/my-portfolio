'use client';

import { useState, useEffect } from 'react';

const SECTIONS = [
  'hero',
  'signal',
  'experience',
  'education',
  'work',
  'constellation',
  'archive',
  'recognition',
  'contact',
];

/**
 * Tracks which section is currently in view for navigation highlighting.
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-20% 0px -70% 0px',
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
