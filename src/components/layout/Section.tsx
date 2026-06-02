'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  number?: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
  fullBleed?: boolean;
}

export default function Section({
  id,
  number,
  label,
  children,
  className = '',
  fullBleed = false,
}: SectionProps) {
  const containerRef = useScrollReveal();

  return (
    <section
      id={id}
      ref={containerRef}
      className={`${styles.section} ${fullBleed ? styles.fullBleed : ''} ${className}`}
    >
      {(number || label) && (
        <div className={`${styles.sectionHeader} reveal`}>
          {number && <span className={styles.number}>{number}</span>}
          {label && <span className={styles.label}>{label}</span>}
        </div>
      )}
      {children}
    </section>
  );
}
