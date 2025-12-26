"use client";

import { Environment } from "@react-three/drei";

export const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.15} />

      <pointLight
        position={[0, 0, 0.5]}
        intensity={2.5}
        distance={6}
        decay={2}
        color="#7fdcff"
      />

      <spotLight
        position={[-3, 2, -2]}
        intensity={0.6}
        angle={0.4}
        penumbra={1}
        color="#ffb36b"
      />

      <spotLight
        position={[3, -2, -2]}
        intensity={0.4}
        angle={0.4}
        penumbra={1}
        color="#7fdcff"
      />

      <Environment preset="city" />
    </>
  );
};
