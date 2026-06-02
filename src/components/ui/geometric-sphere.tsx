"use client";

import React, { useState, useEffect, useCallback, useRef, ReactNode } from "react";

export const CONFIG = {
  // Visuals matching portfolio theme
  primaryColor: "77, 255, 223", // Signal Cyan
  secondaryColor: "26, 26, 26", // Dust Gray

  // Animation Speed
  sphereRotationDuration: "240s",
  gridPanDuration: "180s",
  coreGlowDuration: "25s",

  // Intensity & Depth
  wireframeOpacity: 0.75,
  wireframeShadowIntensity: 70,
  coreBlur: 200,
  parallaxDepth: 35,
  lerpFactor: 0.08,
  sphereDensity: 12,
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function GeometricSphere() {
  const [targetMousePos, setTargetMousePos] = useState({ x: 0, y: 0 });
  const currentMousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  const animateLerp = useCallback(() => {
    currentMousePos.current.x = lerp(currentMousePos.current.x, targetMousePos.x, CONFIG.lerpFactor);
    currentMousePos.current.y = lerp(currentMousePos.current.y, targetMousePos.y, CONFIG.lerpFactor);

    setTargetMousePos((p) => ({
      x: currentMousePos.current.x,
      y: currentMousePos.current.y,
    }));

    animationFrameRef.current = requestAnimationFrame(animateLerp);
  }, [targetMousePos.x, targetMousePos.y]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animateLerp);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [animateLerp]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (clientX - centerX) / centerX;
    const y = (clientY - centerY) / centerY;
    setTargetMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const { x: smoothX, y: smoothY } = currentMousePos.current;

  // Parallax & rotation math
  const parallaxDepth = CONFIG.parallaxDepth;
  const rotationStrength = 5;

  const baseTranslate = `translate3d(${smoothX * parallaxDepth}px, ${smoothY * parallaxDepth}px, 0)`;
  const gridTranslate = `translate3d(${-smoothX * (parallaxDepth / 2)}px, ${-smoothY * (parallaxDepth / 2)}px, 0)`;
  const hazeTranslate = `translate3d(${smoothX * (parallaxDepth / 2)}px, ${smoothY * (parallaxDepth / 2)}px, 0)`;

  const tiltRotateX = smoothY * rotationStrength;
  const tiltRotateY = -smoothX * rotationStrength;
  const tiltTranslate = `rotateX(${tiltRotateX}deg) rotateY(${tiltRotateY}deg)`;

  // Generate sphere rings
  const sphereRings = Array.from({ length: CONFIG.sphereDensity }, (_, i) => {
    const step = 90 / (CONFIG.sphereDensity / 2);
    const angle = i * step;
    const commonStyle = {
      transform: i % 2 === 0 ? `rotateY(${angle}deg)` : `rotateX(${angle}deg)`,
      border: `1px solid rgba(${CONFIG.primaryColor}, ${CONFIG.wireframeOpacity})`,
      boxShadow: `0 0 ${CONFIG.wireframeShadowIntensity}px rgba(${CONFIG.primaryColor}, 0.3)`,
      position: 'absolute' as const,
      inset: 0,
      borderRadius: '50%',
    };
    return (
      <div
        key={`ring-${i}`}
        style={commonStyle}
        aria-hidden="true"
      />
    );
  });

  const coreLightStyle = {
    width: "400px",
    height: "400px",
    backgroundImage: `radial-gradient(circle, rgba(${CONFIG.secondaryColor}, 0.45) 0%, transparent 70%)`,
    filter: `blur(${CONFIG.coreBlur}px)`,
    boxShadow: `0 0 ${CONFIG.coreBlur / 2}px 30px rgba(${CONFIG.secondaryColor}, 0.2), 0 0 ${CONFIG.coreBlur}px 50px rgba(${CONFIG.primaryColor}, 0.15)`,
  };

  const panningGridStyle = {
    transform: gridTranslate,
    backgroundImage:
      "repeating-linear-gradient(to right, rgba(26,26,26,0.9) 1px, transparent 1px), repeating-linear-gradient(to bottom, rgba(26,26,26,0.9) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    opacity: 0.15,
  };

  const hazeStyle = {
    transform: hazeTranslate,
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.1) 0%, transparent 50%)`,
    filter: "blur(150px)",
    opacity: 0.4,
    mixBlendMode: "screen" as const,
  };

  const deepBaseStyle = {
    transform: baseTranslate,
    backgroundImage: `radial-gradient(at 50% 50%, rgba(${CONFIG.primaryColor}, 0.05) 0%, transparent 90%)`,
  };

  const bloomStyle = {
    transform: baseTranslate,
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.2) 0%, transparent 50%), radial-gradient(circle at 10% 10%, rgba(${CONFIG.secondaryColor}, 0.25) 0%, transparent 30%)`,
    mixBlendMode: "screen" as const,
    filter: "blur(100px)",
    opacity: 0.8,
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <style>{`
        @keyframes sphereRotate {
          from { transform: rotateY(0deg) rotateX(0deg); }
          to { transform: rotateY(360deg) rotateX(360deg); }
        }
        @keyframes gridPan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes coreGlow {
          0%,100% { transform: scale(1.0); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .sphere-rotation { animation: sphereRotate linear infinite; }
        .panning-grid { animation: gridPan linear infinite; }
        .core-light { animation: coreGlow ease-in-out infinite; animation-duration: ${CONFIG.coreGlowDuration}; }
      `}</style>
      
      {/* Layer 0: Panning Grid Layer (Farthest Back - ZIndex 0) with fading edges */}
      <div 
        className="absolute inset-0 panning-grid" 
        style={{ 
          ...panningGridStyle, 
          animationDuration: CONFIG.gridPanDuration,
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)'
        }} 
      />

      {/* Layer 1: Volumetric Haze (Medium - ZIndex 1) */}
      <div 
        className="absolute inset-0" 
        style={{
          ...hazeStyle,
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)'
        }} 
      />

      {/* Layer 2: Deep Base Background & Core Glow (ZIndex 2-3) */}
      <div className="absolute inset-0" style={deepBaseStyle}>
        <div className="core-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={coreLightStyle} />
      </div>

      {/* Layer 3: Geometric Glow Sphere (3D Animated Element) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sphere-container z-0 pointer-events-none opacity-40">
        <div
          className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] sphere-rotation"
          style={{
            transform: tiltTranslate,
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            animationDuration: CONFIG.sphereRotationDuration,
          }}
        >
          {sphereRings}
        </div>
      </div>

      {/* Layer 4: Soft Radial Bloom (Ambient Light Layer) */}
      <div className="absolute inset-0" style={bloomStyle} />
    </div>
  );
}
