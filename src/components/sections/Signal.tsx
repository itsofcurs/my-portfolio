'use client';

import Section from '@/components/layout/Section';
import GeometricSphere from '@/components/ui/geometric-sphere';

export default function Signal() {
  return (
    <Section id="signal" number="02" label="SIGNAL">
      {/* Manifesto Sphere Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] mt-8 flex flex-col items-center justify-center">
        
        {/* Background Sphere Effect - Centered exactly on the Manifesto */}
        <GeometricSphere />
        
        <div className="relative z-10 w-full max-w-4xl px-4 flex justify-center">
          <div className="max-w-3xl m-0 w-full">
            <blockquote className="reveal text-center flex flex-col gap-2 sm:gap-4">
              <span className="font-display font-bold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">I DON&apos;T CHASE TRENDS.</span>
              <span className="font-display font-bold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">I BUILD INTELLIGENT SYSTEMS</span>
              <span className="font-display font-bold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                THAT SOLVE REAL-WORLD <br className="hidden sm:block" /> PROBLEMS AT <em className="not-italic text-[#4dffdf] drop-shadow-[0_0_15px_rgba(77,255,223,0.3)]">SCALE</em>.
              </span>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bio / Resume Section - Kept distinct and below the main sphere */}
      <div className="relative z-20 flex flex-col items-center justify-center -mt-8 sm:-mt-12 px-4 pb-12">
        <div className="flex flex-col items-center space-y-8 reveal backdrop-blur-md bg-black/60 p-8 sm:p-10 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-2xl w-full">
          <p className="text-base sm:text-lg text-[#a3a3a3] max-w-xl leading-relaxed text-center">
            Full-Stack & AI Engineer pursuing B.Tech in Artificial Intelligence & Data Science at VIIT Pune. 
            Experienced in building AI agents, LLM-powered workflows, real-time systems, and privacy-compliant applications. 
            Passionate about AI-native privacy engineering, code analysis, data flow mapping, and developing scalable 
            systems that handle sensitive data responsibly.
          </p>
          
          <a href="https://drive.google.com/file/d/1RtbLkv08CHbyy9uS22areYBh8udLFap1/view?usp=sharing" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#131313] border border-[#333333] text-sm font-mono text-[#4dffdf] hover:bg-[#4dffdf]/10 hover:border-[#4dffdf]/50 transition-all duration-300 hover:scale-105 group" target="_blank" rel="noopener noreferrer">
            RÉSUMÉ <span className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
