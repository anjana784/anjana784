import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Space } from "./space";

export const Experience = () => {
  const state = useThree();

  useEffect(() => {
    console.log(state.camera.position);
  }, [state]);

  return (
    <>
      <Space />
    </>
  );
};
