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
          opacity={0.1}
          iridescence={1}
          iridescenceIOR={1.35}
          iridescenceThicknessRange={[120, 900]}
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
