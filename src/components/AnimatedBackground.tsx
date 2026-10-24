import React, { useEffect, useState, useRef } from 'react';
import { useAnimation } from '../context/AnimationContext';

export const AnimatedBackground: React.FC = () => {
  const { isPaused } = useAnimation();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    // Detect if device has a fine pointer (mouse/trackpad), skip listeners on mobile/touch
    const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 20;
      targetY = (e.clientY / window.innerHeight - 0.5) * 20;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setMouseOffset({ x: targetX, y: targetY });
          rafRef.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#141311] transform-gpu"
    >
      {/* ========================================================
          CAMADA 1: PROFUNDIDADE & GRADIENTES OTIMIZADOS
          Gradientes suaves em bronze (#A88769) e champagne (#E3C8B2)
          utilizando aceleração de hardware sem sobrecarga de GPU.
          ======================================================== */}
      {/* Base warm dark tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141311] via-[#1A1714] to-[#141311]" />

      {/* Top large champagne nebula */}
      <div
        style={{
          transform: isPaused
            ? 'none'
            : `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
        }}
        className="absolute -top-32 -left-32 w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(227,200,178,0.16)_0%,rgba(168,135,105,0.06)_45%,transparent_70%)] blur-3xl animate-depth-drift"
      />

      {/* Mid-screen floating bronze/champagne depth aura */}
      <div
        style={{
          transform: isPaused
            ? 'none'
            : `translate3d(${mouseOffset.x * -0.3}px, ${mouseOffset.y * -0.3}px, 0)`,
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
        }}
        className="absolute top-[35%] -right-36 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(240,216,196,0.12)_0%,rgba(168,135,105,0.08)_40%,transparent_75%)] blur-3xl animate-depth-pulse"
      />

      {/* Lower depth gradient reaching the footer */}
      <div
        style={{
          transform: isPaused
            ? 'none'
            : `translate3d(${mouseOffset.x * 0.25}px, ${mouseOffset.y * 0.25}px, 0)`,
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
        }}
        className="absolute -bottom-40 left-[10%] w-[45rem] h-[45rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(227,200,178,0.10)_0%,rgba(32,28,24,0.25)_50%,transparent_75%)] blur-3xl animate-depth-drift"
      />

      {/* ========================================================
          CAMADA 2: PRINCIPAL - FITAS LARGAS DE SEDA & METAL CHAMPAGNE
          Ondas largas e fluidas com reflexos metálicos fluidos.
          ======================================================== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-65 mix-blend-screen pointer-events-none transform-gpu"
        viewBox="0 0 1440 1000"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Metallic Champagne Silk Ribbon Gradient 1 */}
          <linearGradient id="champagne-silk-1" x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#141311" stopOpacity="0" />
            <stop offset="25%" stopColor="#A88769" stopOpacity="0.35" />
            <stop offset="48%" stopColor="#E3C8B2" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#FFF2E7" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#E3C8B2" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#A88769" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#141311" stopOpacity="0" />
          </linearGradient>

          {/* Ribbon Specular Highlight Gradient */}
          <linearGradient id="champagne-specular" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#A88769" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#E3C8B2" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#F0D8C4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#141311" stopOpacity="0" />
          </linearGradient>

          {/* Lower Ribbon Gradient 2 */}
          <linearGradient id="champagne-silk-2" x1="100%" y1="10%" x2="0%" y2="90%">
            <stop offset="0%" stopColor="#141311" stopOpacity="0" />
            <stop offset="20%" stopColor="#A88769" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#E3C8B2" stopOpacity="0.75" />
            <stop offset="75%" stopColor="#F0D8C4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#141311" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Primary Upper Silk Ribbon (Wide, fluid, crossing upper-mid) */}
        <g className={isPaused ? '' : 'animate-ribbon-1'} style={{ willChange: 'transform' }}>
          <path
            d="M-150,180 C200,60 450,420 850,220 C1200,40 1400,340 1600,240"
            stroke="url(#champagne-silk-1)"
            strokeWidth="38"
            strokeLinecap="round"
          />
          {/* Specular highlight thread along the crest */}
          <path
            d="M-150,180 C200,60 450,420 850,220 C1200,40 1400,340 1600,240"
            stroke="url(#champagne-specular)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Secondary Lower Silk Ribbon (Traversing middle-to-footer) */}
        <g className={isPaused ? '' : 'animate-ribbon-2'} style={{ willChange: 'transform' }}>
          <path
            d="M-100,720 C250,920 600,560 1020,820 C1280,980 1480,680 1620,740"
            stroke="url(#champagne-silk-2)"
            strokeWidth="48"
            strokeLinecap="round"
          />
          {/* Highlight core */}
          <path
            d="M-100,720 C250,920 600,560 1020,820 C1280,980 1480,680 1620,740"
            stroke="url(#champagne-specular)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* ========================================================
          CAMADA 3: LUZ & PONTOS LUMINOSOS
          Halos difusos suaves e pequenos pontos cintilantes.
          ======================================================== */}
      {/* Diffuse champagne light halo */}
      <div className="absolute top-[22%] left-[45%] w-60 h-60 rounded-full bg-[#E3C8B2]/12 blur-2xl animate-halo-breath pointer-events-none" />
      <div className="absolute top-[68%] left-[28%] w-64 h-64 rounded-full bg-[#F0D8C4]/10 blur-2xl animate-halo-breath pointer-events-none" />

      {/* Discreet starlight particles with subtle coordinates */}
      <div className="absolute top-[16%] left-[24%] w-1.5 h-1.5 rounded-full bg-[#FFF2E7] shadow-[0_0_8px_#E3C8B2] animate-starlight-1" />
      <div className="absolute top-[28%] right-[18%] w-2 h-2 rounded-full bg-[#F0D8C4] shadow-[0_0_12px_#F0D8C4] animate-starlight-2" />
      <div className="absolute top-[52%] left-[12%] w-1 h-1 rounded-full bg-[#E3C8B2] shadow-[0_0_6px_#E3C8B2] animate-starlight-3" />
      <div className="absolute top-[75%] right-[22%] w-2 h-2 rounded-full bg-[#FFF2E7] shadow-[0_0_10px_#E3C8B2] animate-starlight-1" />
      <div className="absolute top-[88%] left-[40%] w-1.5 h-1.5 rounded-full bg-[#F0D8C4] shadow-[0_0_8px_#F0D8C4] animate-starlight-2" />
    </div>
  );
};
