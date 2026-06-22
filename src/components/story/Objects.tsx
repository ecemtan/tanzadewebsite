"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════
   ORGANIC OBJECT — Abstract WebGL storytelling element
   ═══════════════════════════════════════════════════ */

export function OrganicObject({ 
  color = "#D2B48C", 
  speed = 1, 
  distort = 0.4, 
  radius = 1 
}: { 
  color?: string; 
  speed?: number; 
  distort?: number; 
  radius?: number; 
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 4;
    meshRef.current.rotation.y = Math.sin(t / 4) / 4;
    meshRef.current.position.y = Math.sin(t / 2) / 10;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={radius}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

export function MineralObject({ color = "#4A4A4A" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 0]} />
      <MeshWobbleMaterial
        color={color}
        speed={1}
        factor={0.2}
        roughness={0.4}
      />
    </mesh>
  );
}
