"use client";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Space } from "./space";
import { useScroll } from "@react-three/drei";

export const Experience = () => {
  const scroll = useScroll();

  const startZ = 5;
  const endZ = -5;

  useFrame((state) => {
    // scroll.offset is 0 → 1
    const progress = scroll.curve(0, 1);

    // Move camera forward along Z
    state.camera.position.z = THREE.MathUtils.lerp(startZ, endZ, scroll.offset);

    console.log(progress);
  });

  return <Space />;
};
