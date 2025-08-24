"use client";

import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const shapes = Array.from(el.querySelectorAll<HTMLDivElement>("[data-shape]"));

    const setPos = (s: HTMLElement) => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const x = Math.random() * w;
      const y = Math.random() * h;
      const z = Math.random() * 500 - 250; // profundidade
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      s.style.transform = `translate3d(-50%, -50%, ${z}px) rotateX(${Math.random()*360}deg) rotateY(${Math.random()*360}deg)`;
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
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        backgroundColor: "#05070a",
        zIndex: -1,
        perspective: 1000,
      }}
    >
      {/* Grid de fundo */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a2f35" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Formas geométricas */}
      <div data-shape className="shape cube" />
      <div data-shape className="shape square" />
      <div data-shape className="shape triangle" />
      <div data-shape className="shape rectangle" />
      <div data-shape className="shape circle" />

      <style>{`
        .shape {
          position: absolute;
          width: 60px;
          height: 60px;
          background: none;
          border: 2px solid #6b7280;
          border-radius: 0;
          animation: floaty linear infinite;
          transform-style: preserve-3d;
        }
        .shape.cube {
          border-radius: 6px;
        }
        .shape.square {
          border-radius: 0;
        }
        .shape.rectangle {
          width: 80px;
          height: 50px;
        }
        .shape.triangle {
          width: 0;
          height: 0;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 60px solid #6b7280;
          background: none;
          border: none;
        }
        .shape.circle {
          border-radius: 50%;
        }

        @keyframes floaty {
          0% { transform: translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(0deg); }
          50% { transform: translate3d(-50%, -50%, 50px) rotateX(20deg) rotateY(20deg); }
          100% { transform: translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(0deg); }
        }
      `}</style>
    </div>
  );
}