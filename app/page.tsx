"use client";
import * as React from "react";
import { Experience } from "@/components/experience";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PerfHeadless, usePerf } from "r3f-perf";

const PerfLogger = () => {
  const gl = usePerf((s) => s.gl);
  const log = usePerf((s) => s.log);
  const getReport = usePerf((s) => s.getReport);

  React.useEffect(() => {
    if (!gl) return;
    console.log(gl, log, getReport());
  }, [gl, log, getReport]);

  return null;
};

const PerfHook = () => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // Ensure PerfHeadless has mounted/initialized before subscribing via usePerf()
    setReady(true);
  }, []);

  return (
    <>
      <PerfHeadless />
      {ready ? <PerfLogger /> : null}
    </>
  );
};

const HomePage = () => {
  return (
    <div className="w-dvw h-dvh no-scrollbar">
      <Canvas>
        <PerfHook />
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls />
        <Experience />
      </Canvas>
    </div>
  );
};

export default HomePage;
