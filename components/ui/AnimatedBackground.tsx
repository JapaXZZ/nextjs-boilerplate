"use client";

import React from "react";

export default function AnimatedBackground(): JSX.Element {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[#0a0a0a]">
        {/* camada de brilho suave */}
        <div className="absolute inset-0 opacity-60"
             style={{background:
               "radial-gradient(60vmax 60vmax at 20% 10%, #4f46e5 0%, transparent 60%),\
                radial-gradient(50vmax 50vmax at 80% 20%, #06b6d4 0%, transparent 55%),\
                radial-gradient(55vmax 55vmax at 50% 80%, #ef4444 0%, transparent 60%)"}} />

        {/* SVGs animados */}
        <svg className="absolute -top-24 -left-24 w-[55vmax] h-[55vmax] blur-[30px] opacity-70"
             viewBox="0 0 100 100" fill="none">
          <polygon className="poly poly1"
                   points="50,5 95,35 78,90 22,90 5,35"
                   fill="url(#g1)"/>
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#6366f1"/>
              <stop offset="100%" stopColor="#0ea5e9"/>
            </radialGradient>
          </defs>
        </svg>

        <svg className="absolute top-1/2 -translate-y-1/2 -right-32 w-[60vmax] h-[60vmax] blur-[26px] opacity-70"
             viewBox="0 0 100 100" fill="none">
          <polygon className="poly poly2"
                   points="50,8 92,30 92,70 50,92 8,70 8,30"
                   fill="url(#g2)"/>
          <defs>
            <radialGradient id="g2" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#22c55e"/>
              <stop offset="100%" stopColor="#16a34a"/>
            </radialGradient>
          </defs>
        </svg>

        <svg className="absolute bottom-[-12rem] left-1/2 -translate-x-1/2 w-[70vmax] h-[70vmax] blur-[24px] opacity-70"
             viewBox="0 0 100 100" fill="none">
          <polygon className="poly poly3"
                   points="50,10 70,20 90,50 70,80 50,90 30,80 10,50 30,20"
                   fill="url(#g3)"/>
          <defs>
            <radialGradient id="g3" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#f97316"/>
              <stop offset="100%" stopColor="#ef4444"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* estilos das animações */}
      <style jsx global>{`
        .poly {
          transform-origin: 50% 50%;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .poly1 { animation-name: drift1, spin1; animation-duration: 38s, 120s; }
        .poly2 { animation-name: drift2, spin2; animation-duration: 42s, 140s; }
        .poly3 { animation-name: drift3, spin3; animation-duration: 46s, 160s; }

        @keyframes spin1 { 0%{rotate:0deg} 100%{rotate:360deg} }
        @keyframes spin2 { 0%{rotate:0deg} 100%{rotate:-360deg} }
        @keyframes spin3 { 0%{rotate:0deg} 100%{rotate:360deg} }

        /* trajetórias suaves */
        @keyframes drift1 {
          0%   { transform: translate(0px,0px) scale(1.00); }
          25%  { transform: translate(6px,-4px) scale(1.04); }
          50%  { transform: translate(0px,-8px) scale(1.00); }
          75%  { transform: translate(-6px,-4px) scale(0.96); }
          100% { transform: translate(0px,0px) scale(1.00); }
        }
        @keyframes drift2 {
          0%   { transform: translate(0px,0px) scale(1.00); }
          25%  { transform: translate(-8px,6px) scale(0.98); }
          50%  { transform: translate(-2px,10px) scale(1.02); }
          75%  { transform: translate(6px,6px) scale(1.00); }
          100% { transform: translate(0px,0px) scale(1.00); }
        }
        @keyframes drift3 {
          0%   { transform: translate(0px,0px) scale(1.00); }
          20%  { transform: translate(10px,-6px) scale(1.03); }
          40%  { transform: translate(16px,2px) scale(0.99); }
          60%  { transform: translate(6px,10px) scale(1.02); }
          80%  { transform: translate(-8px,4px) scale(0.97); }
          100% { transform: translate(0px,0px) scale(1.00); }
        }
      `}</style>
    </>
  );
}