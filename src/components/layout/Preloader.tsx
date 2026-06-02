'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        // Random increments for a more natural feel
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.preloader}
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.content}>
            <div className={styles.loadingText}>INITIALIZING WEBGL</div>
            <div className={styles.progressWrapper}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className={styles.percentage}>{Math.min(progress, 100)}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
