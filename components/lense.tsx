"use client";
export const Lense = () => {
  return (
    <>
      <mesh>
        <circleGeometry args={[1, 32]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.5}
          color={"gold"}
          iridescence={1}
          iridescenceIOR={1.35}
          iridescenceThicknessRange={[120, 900]}
        />
      </mesh>

      <mesh position-z={-3}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};
