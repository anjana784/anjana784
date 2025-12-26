"use client";
import * as THREE from "three";
import { Base, Geometry, Subtraction } from "@react-three/csg";

export const Glass = () => {
  return (
    <>
      <mesh>
        <meshStandardMaterial
          side={THREE.DoubleSide}
          transparent
          opacity={0.5}
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
