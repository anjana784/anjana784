"use client";

import { Environment } from "@react-three/drei";
import { Glass } from "./glass";
import { Lense } from "./lense";
import { Lights } from "./lights";
import { Portal } from "./portal";

// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// import { Space } from "./space";
// import { useScroll } from "@react-three/drei";
// import { useRouter } from "next/navigation";

export const Experience = () => {
  // const scroll = useScroll();

  // const startZ = 5;
  // const endZ = -5;

  // const router = useRouter();

  // useFrame((state) => {
  //   // scroll.offset is 0 → 1
  //   const progress = scroll.offset;

  //   // Move camera forward along Z
  //   state.camera.position.z = THREE.MathUtils.lerp(startZ, endZ, progress);

  //   console.log(progress);

  //   if (progress > 0.95) {
  //     router.push("/about");
  //   }
  // });

  // return <Space />;
  return (
    <>
      <Environment preset="city" />
      <Lights />
      <Glass />
      <Portal />
      <Lense />
    </>
  );
};
