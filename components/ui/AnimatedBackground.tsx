"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Shape({ type, position }: { type: string; position: [number, number, number] }) {
  switch (type) {
    case "cube":
      return (
        <mesh position={position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#6b7280" wireframe />
        </mesh>
      );
    case "rect":
      return (
        <mesh position={position}>
          <boxGeometry args={[1.5, 0.8, 1]} />
          <meshStandardMaterial color="#9ca3af" wireframe />
        </mesh>
      );
    case "triangle":
      return (
        <mesh position={position} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.8, 1.2, 3]} />
          <meshStandardMaterial color="#4b5563" wireframe />
        </mesh>
      );
    case "circle":
      return (
        <mesh position={position}>
          <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
          <meshStandardMaterial color="#6b7280" wireframe />
        </mesh>
      );
    default:
      return null;
  }
}

export default function AnimatedBackground() {
  const shapes = Array.from({ length: 20 }).map(() => ({
    type: ["cube", "rect", "triangle", "circle"][Math.floor(Math.random() * 4)],
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ] as [number, number, number],
  }));

  return (
    <Canvas
      style={{ position: "fixed", inset: 0, zIndex: -1, backgroundColor: "#05070a" }}
      camera={{ position: [0, 0, 15], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        {shapes.map((s, i) => (
          <Shape key={i} type={s.type} position={s.position} />
        ))}
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}