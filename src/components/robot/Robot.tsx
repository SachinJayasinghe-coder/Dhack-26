"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Robot() {
  const gltf = useGLTF("/models/robot.glb");

  useEffect(() => {
    console.log(gltf);
  }, [gltf]);

  return (
    <primitive
      object={gltf.scene}
      scale={0.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

useGLTF.preload("/models/robot.glb");