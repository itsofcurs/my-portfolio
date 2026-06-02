'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';
import Hero3D from '../ui/Hero3D';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
          observer.disconnect(); // Only load once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={containerRef} className={styles.heroContainer}>
      {/* LAYER 1: Ambient Background */}
      <div className={styles.backgroundWrapper} aria-hidden="true">
        {isHeroVisible && (
          <Hero3D />
        )}
      </div>

      {/* LAYER 2: Gradient Overlay */}
      <div className={styles.gradientOverlay} />

      {/* LAYER 3 & 4: CSS Grid Content & Object */}
      <div className={styles.gridContainer}>
        
        {/* Layer 3: Text Content */}
        <div className={styles.contentColumn}>
          <div className={styles.textContent}>
            <h1 className={styles.name}>ROHAN ANKUSH JADHAV</h1>
            
            <ul className={styles.roles}>
              <li>AI Engineer</li>
              <li>Data Scientist</li>
              <li>Full Stack Developer</li>
            </ul>

            <div className={styles.ctaGroup}>
              <a href="#work" className={styles.primaryCta}>
                VIEW WORK
              </a>
              <a href="https://drive.google.com/file/d/1Uxvr7__61K5os8ygP1qPv1_lFpPPZhPV/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={styles.secondaryCta}>
                RESUME
              </a>
            </div>
          </div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>SCROLL</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
