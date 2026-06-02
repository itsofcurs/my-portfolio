'use client';

import { useState } from 'react';
import Section from '@/components/layout/Section';
import { Folder, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import GithubIcon from '../ui/GithubIcon';
import { projects, Project } from '@/data/projects';
import TiltCard from '../ui/TiltCard';
import styles from './Archive.module.css';

function ArchiveCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TiltCard className={styles.card}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className={styles.cardHeader}>
          <Folder size={32} color="var(--smoke)" />
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--smoke)' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" aria-label="External Link">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', flexGrow: 1 }}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p 
            className={`${styles.cardDescription} ${isExpanded ? styles.expanded : ''}`} 
            style={{ marginTop: '0.5rem' }}
          >
            {project.description}
          </p>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.readMoreBtn}
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>READ LESS <ChevronUp size={14} /></>
            ) : (
              <>READ MORE <ChevronDown size={14} /></>
            )}
          </button>
        </div>

        <div className={styles.cardTags} style={{ marginTop: '1.5rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.cardTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}

export default function Archive() {
  return (
    <Section id="archive" number="05" label="ARCHIVE">
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={`archive-${project.id}`} className="reveal" style={{ height: '100%' }}>
            <ArchiveCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
}
