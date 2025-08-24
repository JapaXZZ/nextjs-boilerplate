"use client";

import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const shapes: SVGElement[] = []; // <- aceitar SVGPolygonElement e SVGCircleElement
    const colors = ["#6b7280", "#9ca3af", "#4b5563"];

    const createShape = (type: "triangle" | "square" | "rectangle" | "circle") => {
      if (type === "circle") {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const r = 15 + Math.random() * 25;
        circle.setAttribute("r", `${r}`);
        circle.setAttribute("cx", `${Math.random() * window.innerWidth}`);
        circle.setAttribute("cy", `${Math.random() * window.innerHeight}`);
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke", colors[Math.floor(Math.random() * colors.length)]);
        circle.setAttribute("stroke-width", "2");
        svg.appendChild(circle);
        return circle;
      } else {
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = 30 + Math.random() * 40;
        let points = "";
        if (type === "triangle") {
          points = `${x},${y} ${x + size},${y} ${x + size / 2},${y - size}`;
        } else if (type === "rectangle") {
          points = `${x},${y} ${x + size},${y} ${x + size},${y - size / 2} ${x},${y - size / 2}`;
        } else if (type === "square") {
          points = `${x},${y} ${x + size},${y} ${x + size},${y - size} ${x},${y - size}`;
        }
        polygon.setAttribute("points", points);
        polygon.setAttribute("fill", "none");
        polygon.setAttribute("stroke", colors[Math.floor(Math.random() * colors.length)]);
        polygon.setAttribute("stroke-width", "2");
        svg.appendChild(polygon);
        return polygon;
      }
    };

    for (let i = 0; i < 20; i++) {
      const types = ["triangle", "square", "rectangle", "circle"] as const;
      shapes.push(createShape(types[Math.floor(Math.random() * types.length)]));
    }

    shapes.forEach((shape) => {
      const animate = () => {
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        const angle = (Math.random() - 0.5) * 45;
        shape.animate(
          [
            { transform: "translate(0px, 0px) rotateY(0deg) rotateX(0deg)" },
            { transform: `translate(${dx}px, ${dy}px) rotateY(${angle}deg) rotateX(${angle}deg)` }
          ],
          {
            duration: 20000 + Math.random() * 10000,
            iterations: Infinity,
            direction: "alternate",
          }
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
        backgroundColor: "#05070a",
        zIndex: -1,
      }}
    />
  );
}