"use client";
import { Experience } from "@/components/experience";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const HomePage = () => {
  return (
    <div className="w-dvw h-dvh">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls />
        <Experience />
      </Canvas>
    </div>
  );
};

export default HomePage;
