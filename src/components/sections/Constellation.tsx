'use client';

import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import Section from '@/components/layout/Section';
import { domains } from '@/data/domains';
import styles from './Constellation.module.css';

// Pre-calculate 3D positions for the domains
const domainNodes = domains.map((domain, index) => {
  const phi = Math.acos(-1 + (2 * index) / domains.length);
  const theta = Math.sqrt(domains.length * Math.PI) * phi;
  const radius = 3;
  return {
    ...domain,
    position: [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi)
    ] as [number, number, number]
  };
});

function NodeNetwork({ activeNode, setActiveNode }: { activeNode: string | null, setActiveNode: (id: string | null) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && !activeNode) {
      // Slowly auto-rotate when nothing is hovered
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Draw connections to center */}
      {domainNodes.map((node) => (
        <line key={`line-${node.id}`}>
          <bufferGeometry attach="geometry">
            <float32BufferAttribute attach="attributes-position" args={[new Float32Array([0, 0, 0, ...node.position]), 3]} />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="#4dffdf" opacity={activeNode === node.id ? 0.8 : 0.1} transparent />
        </line>
      ))}

      {/* Draw Nodes */}
      {domainNodes.map((node) => {
        const isActive = activeNode === node.id;
        const isDimmed = activeNode !== null && !isActive;

        return (
          <group key={node.id} position={node.position}>
            <mesh 
              onPointerOver={() => { document.body.style.cursor = 'pointer'; setActiveNode(node.id); }}
              onPointerOut={() => { document.body.style.cursor = 'auto'; setActiveNode(null); }}
            >
              <sphereGeometry args={[isActive ? 0.3 : 0.15, 32, 32]} />
              <meshStandardMaterial 
                color={isActive ? "#4dffdf" : "#ffffff"} 
                emissive={isActive ? "#4dffdf" : "#222222"}
                emissiveIntensity={isActive ? 2 : 0.5}
                opacity={isDimmed ? 0.2 : 1}
                transparent
              />
            </mesh>

            {/* Label in 3D Space */}
            <Text
              position={[0, -0.4, 0]}
              fontSize={0.2}
              color={isActive ? "#4dffdf" : "#a1a1aa"}
              anchorX="center"
              anchorY="middle"
              fillOpacity={isDimmed ? 0.2 : 1}
            >
              {node.label}
            </Text>
          </group>
        );
      })}
    </group>
  );
}

export default function Constellation() {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);
  const activeDomain = domains.find((d) => d.id === activeCluster);

  return (
    <Section id="constellation" number="04" label="CONSTELLATION">
      <div className={`${styles.heading} reveal`}>
        <p className={styles.tagline}>&ldquo;THE STACK IS THE STRATEGY&rdquo;</p>
      </div>

      <div className={`${styles.layout} reveal`}>
        {/* 3D WebGL Graph */}
        <div className={styles.canvas}>
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <NodeNetwork activeNode={activeCluster} setActiveNode={setActiveCluster} />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
          </Canvas>
          
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'var(--smoke)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', pointerEvents: 'none' }}>
            [ CLICK & DRAG TO ROTATE NETWORK ]
          </div>
        </div>

        {/* Telemetry Detail Panel */}
        <aside className={styles.detailPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelIndicator} />
            <span className={styles.panelTitle}>DOMAIN TELEMETRY</span>
          </div>

          <div className={styles.panelDivider} />

          {activeDomain ? (
            <div className={styles.panelContent} key={activeDomain.id}>
              <div className={styles.panelSection}>
                <span className={styles.panelLabel}>CLUSTER</span>
                <h3 className={styles.panelDomainName}>{activeDomain.fullName}</h3>
              </div>
              <div className={styles.panelDivider} />
              <div className={styles.panelSection}>
                <span className={styles.panelLabel}>TECHNOLOGIES</span>
                <ul className={styles.panelSkillList}>
                  {activeDomain.skills.map((skill) => (
                    <li key={skill.name} className={styles.panelSkill}>
                      <span className={styles.skillDot} />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className={styles.panelEmpty}>
              <div className={styles.panelEmptyIcon}>⬡</div>
              <p className={styles.panelEmptyText}>Hover over a 3D node<br />to explore</p>
            </div>
          )}
        </aside>
      </div>
    </Section>
  );
}
