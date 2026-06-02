'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

// --------------------------------------------------------
// INSTRUCTIONS: 
// 1. Go to readyplayer.me and create your avatar.
// 2. Download the .glb file.
// 3. Rename it to "avatar.glb" and put it in the "public" folder.
// 4. Change USE_CUSTOM_AVATAR to true.
// --------------------------------------------------------
const USE_CUSTOM_AVATAR = false;

function CustomAvatar() {
  const { scene } = useGLTF('/avatar.glb');
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Make the avatar head follow the mouse slightly
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.1);
    }
  });

  return <primitive ref={groupRef} object={scene} scale={2} position={[0, -2, 0]} />;
}

function PlaceholderAvatar() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.pointer.y * 0.5,
        0.1
      );
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        -state.pointer.x * 0.5,
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#4dffdf" wireframe />
      </mesh>
    </Float>
  );
}

export default function Avatar3D({ className }: { className?: string }) {
  return (
    <div className={className} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        
        <Suspense fallback={<PlaceholderAvatar />}>
          {USE_CUSTOM_AVATAR ? <CustomAvatar /> : <PlaceholderAvatar />}
        </Suspense>
        
        {/* Allows the user to pan/zoom if they want, but disabled zoom for scrolling safety */}
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
      
      {!USE_CUSTOM_AVATAR && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--smoke)',
          pointerEvents: 'none'
        }}>
          Awaiting ReadyPlayerMe avatar.glb
        </div>
      )}
    </div>
  );
}
