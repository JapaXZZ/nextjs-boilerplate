"use client";

import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const shapes = Array.from(el.querySelectorAll<HTMLElement>("[data-shape]"));
    const setPos = (s: HTMLElement) => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const x = Math.random() * w;
      const y = Math.random() * h;
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      s.style.animationDuration = `${15 + Math.random() * 20}s`;
      s.style.animationDelay = `${-Math.random() * 20}s`;
    };
    shapes.forEach(setPos);
    const onResize = () => shapes.forEach(setPos);
    const ro = new ResizeObserver(onResize);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="animated-bg-container"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        backgroundColor: "#05070a",
      }}
    >
      <svg
        className="grid"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a2f35" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Formas geométricas apenas com contorno */}
      <div data-shape className="shape circle" />
      <div data-shape className="shape square" />
      <div data-shape className="shape triangle" />
      <div data-shape className="shape circle small" />
      <div data-shape className="shape square small" />
      <div data-shape className="shape triangle small" />

      <style>{`
        .grid {
          opacity: 0.2;
        }

        .shape {
          position: absolute;
          width: 120px;
          height: 120px;
          animation: floaty 18s linear infinite;
          pointer-events: none;
          transform-style: preserve-3d;
          background: transparent; /* sem fundo */
        }
        .shape.small { width: 70px; height: 70px; }

        .shape.circle {
          border-radius: 9999px;
          border: 2px solid #6b7280; /* contorno cinza sólido */
        }
        .shape.square {
          border-radius: 12px;
          border: 2px solid #6b7280;
        }
        .shape.triangle {
          width: 0; 
          height: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 100px solid #6b7280;
        }
        .shape.triangle.small {
          border-left-width: 35px;
          border-right-width: 35px;
          border-bottom-width: 60px;
        }

        @keyframes floaty {
          0% { transform: translate(-50%, -50%) translateY(0) rotateX(0deg) rotateY(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-40px) rotateX(20deg) rotateY(20deg); }
          100% { transform: translate(-50%, -50%) translateY(0) rotateX(0deg) rotateY(0deg); }
        }
      `}</style>
    </div>
  );
}