"use client";
import * as THREE from "three";
import { Base, Geometry, Subtraction } from "@react-three/csg";

export const Portal = () => {
  return (
    <>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <Geometry>
          <Base>
            <cylinderGeometry args={[1, 1, 0.3, 64]} />
          </Base>
          <Subtraction>
            <cylinderGeometry args={[0.8, 0.8, 0.3, 64]} />
          </Subtraction>
        </Geometry>

        <meshPhysicalMaterial
          metalness={1}
          roughness={0.25}
          clearcoat={0.6}
          clearcoatRoughness={0.15}
          envMapIntensity={1.3}
          // keep the warm glow as a subtle accent
          emissive={new THREE.Color("#ffb36b")}
          emissiveIntensity={0.35}
        />
      </mesh>
    </>
  );
};
