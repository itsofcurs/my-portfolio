'use client';

import Section from '@/components/layout/Section';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 'blockseblock',
    icon: '💼',
    role: 'AI & Decentralized Systems Intern',
    company: 'BlockseBlock',
    duration: 'Aug 2025 – Sep 2025',
    type: '45-Day Internship',
    points: [
      'Developed an AI-powered voice-controlled task management system using NLP pipelines and real-time command processing.',
      'Designed and implemented secure backend APIs with JWT authentication, task management, and real-time features using Node.js & Socket.IO.',
      'Contributed to scalable system architecture focused on AI integration and efficient data handling.'
    ]
  }
];

export default function Experience() {
  return (
    <Section id="experience" number="08" label="EXPERIENCE">
      <div className={styles.list}>
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`${styles.row} reveal`}>
            <div className={styles.rowInner}>
              <div className={styles.rowLeft}>
                <span className={styles.icon}>{exp.icon}</span>
                <div className={styles.rowContent}>
                  <h3 className={styles.title}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                  <div className={styles.description}>
                    <ul>
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.rowRight}>
                <span className={styles.duration}>{exp.duration}</span>
                <span className={styles.type}>{exp.type}</span>
              </div>
            </div>
            {index < experiences.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
