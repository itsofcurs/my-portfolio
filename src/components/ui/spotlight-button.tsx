"use client";

import React, { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  indicatorPosition: number;
  position: number;
}

const NavItem: React.FC<NavItemProps> = ({ 
  icon: Icon, 
  label,
  isActive = false, 
  onClick,
  indicatorPosition,
  position
}) => {
  const distance = Math.abs(indicatorPosition - position);
  const spotlightOpacity = isActive ? 1 : Math.max(0, 1 - distance * 0.6);

  return (
    <button
      className="group relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 my-1 sm:my-2 transition-all duration-500"
      onClick={onClick}
      aria-label={label}
    >
      <div 
        className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-24 h-12 bg-gradient-to-l from-[#4dffdf]/40 to-transparent blur-lg rounded-full transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: spotlightOpacity,
          transitionDelay: isActive ? '0.1s' : '0s',
        }}
      />
      <Icon
        className={cn(
          "w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 relative z-10",
          isActive 
            ? "text-[#4dffdf] scale-110 drop-shadow-[0_0_8px_rgba(77,255,223,0.5)]" 
            : "text-[#a3a3a3] group-hover:text-[#f5f5f5] group-hover:scale-105"
        )}
        strokeWidth={isActive ? 2.5 : 2}
      />
      
      {/* Tooltip */}
      <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[#171717] border border-[#262626] text-[#4dffdf] text-xs font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl">
        {label}
      </span>
    </button>
  );
};

export interface NavItemData {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface SpotlightNavProps {
  items: NavItemData[];
  activeHref: string;
  onNavigate: (href: string) => void;
}

export const SpotlightNav: React.FC<SpotlightNavProps> = ({ items, activeHref, onNavigate }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
  const navRef = React.useRef<HTMLDivElement>(null);
  
  const activeIndex = Math.max(0, items.findIndex(item => item.href === activeHref));

  useEffect(() => {
    if (navRef.current) {
      const activeBtn = navRef.current.children[activeIndex + 1] as HTMLElement; // +1 to skip the indicator div
      if (activeBtn) {
        setIndicatorStyle({
          top: activeBtn.offsetTop + (activeBtn.offsetHeight / 2) - 12,
          height: 24
        });
      }
    }
  }, [activeIndex, items]);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-4 sm:left-6 z-50">
      <nav 
        ref={navRef}
        className="relative flex flex-col items-center px-1 py-3 sm:px-2 sm:py-4 bg-[#0a0a0a]/80 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-[#262626]"
      >
        <div 
          className="absolute right-0 w-[2px] bg-[#4dffdf] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) rounded-full shadow-[0_0_10px_rgba(77,255,223,0.8)]"
          style={{
            top: `${indicatorStyle.top}px`,
            height: `${indicatorStyle.height}px`,
            transform: 'translateX(1px)',
          }}
        />
        {items.map((item, index) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeIndex === index}
            onClick={() => onNavigate(item.href)}
            indicatorPosition={activeIndex}
            position={index}
          />
        ))}
      </nav>
    </div>
  );
};
