"use client";
import * as THREE from "three";
import { Base, Geometry, Subtraction } from "@react-three/csg";

export const Glass = () => {
  return (
    <>
      <mesh>
        <meshPhysicalMaterial
          side={THREE.DoubleSide}
          transparent
          transmission={1}
          opacity={0.08}
          thickness={0.6}
          ior={1.5}
          roughness={0.05}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={1.4}
          color="#e8fbff"
          attenuationColor="#7fdcff"
          attenuationDistance={2.2}
        />
        <Geometry>
          <Base>
            <planeGeometry args={[15, 13]} />
          </Base>
          <Subtraction>
            <sphereGeometry />
          </Subtraction>
        </Geometry>
      </mesh>
    </>
  );
};
