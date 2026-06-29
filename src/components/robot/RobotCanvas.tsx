"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import Robot from "./Robot";

export default function RobotCanvas() {
  return (
    <div className="relative h-[650px] w-full">

      <Canvas
        camera={{
          position: [0, 1.2, 4],
          fov: 35,
        }}
      >
        {/* Ambient Light */}
        <ambientLight intensity={1.8} />

        {/* Main Light */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={2.5}
        />

        {/* Blue Glow */}
        <pointLight
          position={[0, 2, 2]}
          intensity={15}
          color="#06b6d4"
        />

        {/* Purple Glow */}
        <pointLight
          position={[2, 2, -2]}
          intensity={8}
          color="#8b5cf6"
        />

        {/* Environment */}
        <Environment preset="city" />

        {/* Robot */}
        <Robot />

        {/* Ground Shadow */}
        <ContactShadows
          position={[0, -1.25, 0]}
          opacity={0.35}
          scale={8}
          blur={2}
          far={4}
        />

        {/* Mouse Rotation */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.3}
          maxPolarAngle={Math.PI / 2.3}
          autoRotate={false}
        />
      </Canvas>

      {/* Glowing Platform */}
      <div className="absolute bottom-10 left-1/2 h-16 w-72 -translate-x-1/2 rounded-full bg-cyan-500/40 blur-3xl" />

    </div>
  );
}