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
      s.style.transform = `translate(-50%, -50%) rotate(${Math.floor(
        Math.random() * 360
      )}deg)`;
      s.style.animationDuration = `${12 + Math.random() * 18}s`;
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
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        backgroundColor: "#05070a",
        isolation: "isolate",
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
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d1218" strokeWidth="1" />
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#06090d"
              strokeWidth="1"
              opacity="0.35"
              transform="scale(0.5)"
            />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="70%" stopColor="white" stopOpacity="0.25" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <rect
          width="100%"
          height="100%"
          fill="url(#fade)"
          style={{ mixBlendMode: "soft-light" }}
        />
      </svg>

      <div className="scanline" />

      <div data-shape className="shape circle" />
      <div data-shape className="shape circle small" />
      <div data-shape className="shape square" />
      <div data-shape className="shape square small" />
      <div data-shape className="shape triangle" />
      <div data-shape className="shape triangle small" />

      <svg
        className="wire wire-a"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 C200,40 400,200 600,120 C800,40 1000,200 1200,120"
          fill="none"
          stroke="url(#wire-grad-a)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#soft-glow)"
        />
        <defs>
          <linearGradient id="wire-grad-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0ff" />
            <stop offset="50%" stopColor="#8a5cff" />
            <stop offset="100%" stopColor="#0ff" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="wire wire-b"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C180,160 420,0 660,120 C840,200 1040,40 1200,120"
          fill="none"
          stroke="url(#wire-grad-b)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#soft-glow)"
          opacity="0.7"
        />
        <defs>
          <linearGradient id="wire-grad-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00ffd1" />
            <stop offset="50%" stopColor="#00a3ff" />
            <stop offset="100%" stopColor="#00ffd1" />
          </linearGradient>
        </defs>
      </svg>

      <style>{`
        .grid {
          opacity: 0.7;
        }
        .scanline {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0px,
            rgba(0,0,0,0) 2px,
            rgba(0,0,0,0.1) 3px
          );
          mix-blend-mode: overlay;
          pointer-events: none;
          animation: scan 10s linear infinite;
          opacity: 0.4;
        }
        @keyframes scan {
          0% { transform: translateY(-10%); }
          100% { transform: translateY(10%); }
        }
        .wire {
          position: absolute;
          left: 0;
          width: 150%;
          height: 220px;
          transform: translateX(-10%);
          opacity: 0.5;
          pointer-events: none;
          filter: drop-shadow(0 0 14px rgba(56,189,248,0.2));
        }
        .wire-a {
          top: 20%;
          animation: drift-x 24s ease-in-out infinite alternate;
        }
        .wire-b {
          bottom: 15%;
          animation: drift-x 30s ease-in-out infinite alternate-reverse;
        }
        @keyframes drift-x {
          0% { transform: translateX(-10%) translateY(0); }
          100% { transform: translateX(0%) translateY(0); }
        }

        .shape {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 16px;
          opacity: 0.1;
          filter: blur(0.5px) drop-shadow(0 0 15px rgba(148,163,184,0.2));
          animation-name: floaty, spin;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
          pointer-events: none;
        }
        .shape.small {
          width: 70px;
          height: 70px;
          opacity: 0.15;
        }
        .shape.circle {
          border-radius: 9999px;
          background: radial-gradient(closest-side, rgba(56,189,248,0.45), rgba(56,189,248,0.08) 60%, rgba(56,189,248,0.0) 100%);
          box-shadow: inset 0 0 40px rgba(56,189,248,0.25);
        }
        .shape.square {
          background: linear-gradient(135deg, rgba(138,92,255,0.4), rgba(138,92,255,0.1));
          border: 1px solid rgba(138,92,255,0.4);
        }
        .shape.triangle {
          width: 0; height: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 100px solid rgba(0,255,209,0.2);
          filter: drop-shadow(0 0 10px rgba(0,255,209,0.25));
        }
        .shape.triangle.small {
          border-left-width: 35px;
          border-right-width: 35px;
          border-bottom-width: 60px;
        }
        @keyframes floaty {
          0% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-40px) rotate(10deg); }
          100% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animated-bg-container::before {
          content: "";
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(35% 35% at 20% 15%, rgba(56,189,248,0.15), rgba(0,0,0,0) 70%),
            radial-gradient(40% 40% at 80% 75%, rgba(138,92,255,0.12), rgba(0,0,0,0) 70%),
            radial-gradient(25% 25% at 65% 30%, rgba(0,255,209,0.12), rgba(0,0,0,0) 70%);
          mix-blend-mode: screen;
          pointer-events: none;
          animation: slow-pulse 18s ease-in-out infinite alternate;
        }
        @keyframes slow-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.07); opacity: 0.85; }
        }

        .animated-bg-container::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}