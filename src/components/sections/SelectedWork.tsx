'use client';

import Section from '@/components/layout/Section';
import { projects } from '@/data/projects';
import Image from 'next/image';
import styles from './SelectedWork.module.css';

export default function SelectedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section id="work" number="03" label="SELECTED WORK">
      <div className={styles.stickyContainer}>
        {featured.map((project, index) => (
          <article key={project.id} className={`${styles.projectRow} reveal`}>
            
            {/* Sticky Left Side: Visual */}
            <div className={styles.stickyVisual}>
              <div className={styles.visualContainer}>
                <div className={styles.visualBeamWrapper}>
                  <div className={styles.visualBeam} />
                  <div className={styles.visual}>
                    {project.image ? (
                      <div className={styles.imageHoverWrapper}>
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill
                          unoptimized={true}
                          className={styles.projectImage} 
                        />
                      </div>
                    ) : (
                      <div className={styles.visualPlaceholder}>
                        <span className={styles.projectNumber}>0{index + 1}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Scrolling Right Side: Content */}
            <div className={styles.scrollContent}>
              <div className={styles.metaData}>
                <span className={styles.projectNumber}>0{index + 1}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.viewLink}>
                      VIEW REPOSITORY <span className={styles.arrow}>↗</span>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className={styles.viewLink}>
                      LIVE DEMO <span className={styles.arrow}>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

          </article>
        ))}
      </div>
    </Section>
  );
}
