'use client';

import Section from '@/components/layout/Section';
import styles from './Contact.module.css';

const SOCIAL_LINKS = [
  { label: 'GITHUB', href: 'https://github.com/itsofcurs' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/rohan-jadhav-09688b28a' },
  { label: 'EMAIL', href: 'mailto:rj7276488092@gmail.com' },
  { label: 'PHONE', href: 'tel:+917276488092' },
];

import { ShaderAnimation } from '@/components/ui/shader-animation';

export default function Contact() {
  return (
    <div className="relative w-full overflow-hidden bg-void">
      {/* Dynamic Shader Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <ShaderAnimation />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <Section id="contact" number="07" label="COORDINATES">
          <div className={styles.container}>
            {/* CTA */}
            <div className={`${styles.cta} reveal`}>
              <h2 className={styles.headline}>
                <span className={styles.headlineLine}>LET&apos;S BUILD</span>
                <span className={styles.headlineLine}>SOMETHING</span>
                <span className={styles.headlineLine}>
                  <em className={styles.emphasis}>INTELLIGENT</em>.
                </span>
              </h2>

              <a href="mailto:rj7276488092@gmail.com" className={styles.button}>
                GET IN TOUCH <span className={styles.arrow}>→</span>
              </a>
            </div>

            {/* Divider */}
            <div className={`${styles.divider} reveal`} />

            {/* Social Links */}
            <div className={`${styles.socials} reveal`}>
              {SOCIAL_LINKS.map((link, i) => (
                <span key={link.label}>
                  <a
                    href={link.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                  {i < SOCIAL_LINKS.length - 1 && (
                    <span className={styles.socialDot}> · </span>
                  )}
                </span>
              ))}
            </div>

            {/* Footer */}
            <footer className={`${styles.footer} reveal`}>
              <p className={styles.copyright}>
                © {new Date().getFullYear()} ROHAN ANKUSH JADHAV
              </p>
              <p className={styles.footerNote}>
                DESIGNED & BUILT WITH PRECISION
              </p>
            </footer>
          </div>
        </Section>
      </div>
    </div>
  );
}
