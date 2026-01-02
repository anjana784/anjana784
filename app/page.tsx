"use client";
import { Experience } from "@/components/experience";
import {
  CameraShake,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const HomePage = () => {
  return (
    <div className="w-dvw h-dvh no-scrollbar">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls />
        <Experience />
        <CameraShake
          maxYaw={0.05} // Max amount camera can yaw in either direction
          maxPitch={0.05} // Max amount camera can pitch in either direction
          maxRoll={0.05} // Max amount camera can roll in either direction
          yawFrequency={0.05} // Frequency of the the yaw rotation
          pitchFrequency={0.2} // Frequency of the pitch rotation
          rollFrequency={0.2} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        />
      </Canvas>
    </div>
  );
};

export default HomePage;
