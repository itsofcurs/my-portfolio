'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
// @ts-expect-error - missing types for specific esm export
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleNetwork(props: any) {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random positions for the particles
  const sphere = useMemo(() => {
    // 300 on mobile, 1500 on desktop to save GPU
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const particleCount = isMobile ? 300 : 1500;
    return random.inSphere(new Float32Array(particleCount * 3), { radius: 2 });
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, (state.pointer.x * Math.PI) / 10, 0.05);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, (state.pointer.y * Math.PI) / 10, 0.05);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#4dffdf"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 1.5] }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <fog attach="fog" args={['#09090b', 1, 3]} />
        <ambientLight intensity={0.5} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
