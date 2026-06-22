"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";

/* ═══════════════════════════════════════════════════
   STORY SCENE — R3F Canvas Wrapper
   ═══════════════════════════════════════════════════ */

interface StorySceneProps {
  children: React.ReactNode;
  ambientColor?: string;
}

export default function StoryScene({ children }: StorySceneProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false
        }}
        camera={{ position: [0, 0, 5], fov: 35 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          {children}
          <Environment preset="city" />
        </Suspense>
        
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.3} 
          scale={10} 
          blur={2.5} 
          far={4} 
        />
      </Canvas>
    </div>
  );
}
