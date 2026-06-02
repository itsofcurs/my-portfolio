'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ShaderImageHover({ src, alt, className }: { src: string, alt?: string, className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={className} 
      style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%', backgroundColor: '#09090b' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Image */}
      <img 
        src={src} 
        alt={alt || "Project preview"} 
        style={{ 
          objectFit: 'contain', 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          zIndex: 2,
          transition: 'transform 0.5s ease-out, filter 0.5s ease-out',
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          filter: isHovered ? 'contrast(1.2) saturate(1.2)' : 'contrast(1.1) saturate(1.1)'
        }}
      />
      
      {/* RGB Split Layers (Red & Cyan) */}
      <motion.img 
        src={src} 
        alt="" 
        initial={{ x: 0, opacity: 0 }}
        animate={{ 
          x: isHovered ? -4 : 0, 
          opacity: isHovered ? 0.7 : 0 
        }}
        transition={{ duration: 0.2 }}
        style={{ 
          objectFit: 'contain', 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          zIndex: 1, 
          filter: 'drop-shadow(4px 0 0 red)',
          mixBlendMode: 'screen'
        }}
      />
      
      <motion.img 
        src={src} 
        alt="" 
        initial={{ x: 0, opacity: 0 }}
        animate={{ 
          x: isHovered ? 4 : 0, 
          opacity: isHovered ? 0.7 : 0 
        }}
        transition={{ duration: 0.2 }}
        style={{ 
          objectFit: 'contain', 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          zIndex: 3, 
          filter: 'drop-shadow(-4px 0 0 cyan)',
          mixBlendMode: 'screen',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
