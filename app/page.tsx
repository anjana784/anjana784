"use client";
import { Experience } from "@/components/experience";
import {
  OrbitControls,
  PerspectiveCamera,
  // ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const HomePage = () => {
  return (
    <div className="w-dvw h-dvh no-scrollbar">
      <Canvas>
        {/* <ScrollControls
          pages={3}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE / old Edge
          }}
        > */}
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls />
        <Experience />
        {/* </ScrollControls> */}
      </Canvas>
    </div>
  );
};

export default HomePage;
