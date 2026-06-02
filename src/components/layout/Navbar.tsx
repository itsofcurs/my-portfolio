'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import { SpotlightNav, type NavItemData } from '@/components/ui/spotlight-button';
import { Home, Briefcase, Archive, User, Terminal, Mail, Award, GraduationCap, Building } from 'lucide-react';

const NAV_ITEMS: NavItemData[] = [
  { icon: Home, label: 'Home', href: '#hero' },
  { icon: User, label: 'About', href: '#signal' },
  { icon: Building, label: 'Experience', href: '#experience' },
  { icon: GraduationCap, label: 'Education', href: '#education' },
  { icon: Briefcase, label: 'Work', href: '#work' },
  { icon: Terminal, label: 'Skills', href: '#constellation' },
  { icon: Archive, label: 'Archive', href: '#archive' },
  { icon: Award, label: 'Recognition', href: '#recognition' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const activeSection = useActiveSection();
  
  // Format the active section into a hash href to match our items
  const activeHref = `#${activeSection || 'hero'}`;

  const handleNavigate = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SpotlightNav 
      items={NAV_ITEMS} 
      activeHref={activeHref} 
      onNavigate={handleNavigate} 
    />
  );
}
