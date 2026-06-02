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
    <>
      <div className="fixed top-4 left-4 lg:top-6 lg:left-6 z-[9999] pointer-events-auto">
        <a href="#hero" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); handleNavigate('#hero'); }}>
          <img 
            src="/logo.png" 
            alt="Rohan Ankush Jadhav Logo" 
            className="w-10 h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(77,255,223,0.5)] transition-all duration-300 rounded-full border border-[#262626] bg-[#0a0a0a]/80 backdrop-blur-sm p-1" 
          />
        </a>
      </div>
      <SpotlightNav 
        items={NAV_ITEMS} 
        activeHref={activeHref} 
        onNavigate={handleNavigate} 
      />
    </>
  );
}
