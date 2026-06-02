'use client';

import Section from '@/components/layout/Section';
import { achievements } from '@/data/achievements';
import TiltCard from '../ui/TiltCard';
import styles from './Recognition.module.css';

export default function Recognition() {
  return (
    <Section id="recognition" number="06" label="RECOGNITION">
      <div className={styles.list}>
        {achievements.map((achievement, index) => (
          <div key={achievement.id} style={{ perspective: 1000 }}>
            <TiltCard className={`${styles.row} reveal`}>
              <div className={styles.rowInner}>
                <div className={styles.rowLeft}>
                  <span className={styles.icon}>{achievement.icon}</span>
                  <div className={styles.rowContent}>
                    <h3 className={styles.title}>{achievement.title}</h3>
                    <p className={styles.description}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                <div className={styles.rowRight}>
                  <span className={styles.issuer}>{achievement.issuer}</span>
                  <span className={styles.year}>{achievement.year}</span>
                </div>
              </div>
            </TiltCard>
            {index < achievements.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
