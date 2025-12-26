export const Lights = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[0, 2, 8]} />
    </>
  );
};
