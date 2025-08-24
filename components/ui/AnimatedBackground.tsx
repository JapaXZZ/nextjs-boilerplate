"use client";

import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const shapes: SVGCircleElement[] = [];
    for (let i = 0; i < 12; i++) {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", `${15 + Math.random() * 25}`);
      circle.setAttribute("stroke", "#6b7280");
      circle.setAttribute("fill", "none");
      circle.setAttribute("stroke-width", "2");
      circle.setAttribute("cx", `${Math.random() * window.innerWidth}`);
      circle.setAttribute("cy", `${Math.random() * window.innerHeight}`);
      svg.appendChild(circle);
      shapes.push(circle);
    }

    shapes.forEach((c) => {
      const animate = () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        c.animate(
          [
            { cx: c.cx.baseVal.value, cy: c.cy.baseVal.value },
            { cx: x, cy: y }
          ],
          { duration: 20000 + Math.random() * 10000, iterations: Infinity, direction: "alternate" }
        );
      };
      animate();
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "#05070a",
      }}
    />
  );
}