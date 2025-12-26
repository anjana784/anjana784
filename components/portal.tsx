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
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
};
