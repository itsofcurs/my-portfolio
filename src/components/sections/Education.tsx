'use client';

import Section from '@/components/layout/Section';
import styles from './Education.module.css';

const education = [
  {
    id: 'viit',
    icon: '🎓',
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'VIIT Pune',
    duration: 'Aug 2023 – Present',
    grade: 'CGPA: 8.72'
  },
  {
    id: 'jnv',
    icon: '🏫',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Jawahar Navodaya Vidyalaya, Pune',
    duration: 'Jun 2020 – Mar 2022',
    grade: '87.2%'
  }
];

export default function Education() {
  return (
    <Section id="education" number="09" label="EDUCATION">
      <div className={styles.list}>
        {education.map((edu, index) => (
          <div key={edu.id} className={`${styles.row} reveal`}>
            <div className={styles.rowInner}>
              <div className={styles.rowLeft}>
                <span className={styles.icon}>{edu.icon}</span>
                <div className={styles.rowContent}>
                  <h3 className={styles.title}>{edu.degree}</h3>
                  <span className={styles.institution}>{edu.institution}</span>
                </div>
              </div>
              <div className={styles.rowRight}>
                <span className={styles.duration}>{edu.duration}</span>
                <span className={styles.grade}>{edu.grade}</span>
              </div>
            </div>
            {index < education.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
