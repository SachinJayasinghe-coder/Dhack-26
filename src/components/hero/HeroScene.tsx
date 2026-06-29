"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  Sphere,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";

function Orb() {
  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={2}
    >
      <Sphere args={[1.2, 128, 128]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}

function SmallOrb({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <Float speed={3} rotationIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.25, 64, 64]} />
        <meshStandardMaterial
          color="#00bfff"
          emissive="#00bfff"
          emissiveIntensity={2}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-5, 0, 2]}
        color="#00bfff"
        intensity={30}
      />

      <pointLight
        position={[5, 0, 2]}
        color="#8b5cf6"
        intensity={30}
      />

      <Orb />

      <SmallOrb position={[-2, 1, -1]} />
      <SmallOrb position={[2, -1, -2]} />
      <SmallOrb position={[1.5, 2, -1]} />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}