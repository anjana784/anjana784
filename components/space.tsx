"use client";
import * as THREE from "three";

export const Space = () => {
  return (
    <>
      <mesh rotation={[0, Math.PI / 2, 0]} position-x={-2} position-z={-7.5}>
        <planeGeometry args={[15, 3]} />
        <shaderMaterial
          side={THREE.DoubleSide}
          vertexShader={`
                varying vec2 vUv;
                void main() {
                    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                    vec4 viewPosition = viewMatrix * modelPosition;
                    vec4 projectedPosition = projectionMatrix * viewPosition;

                    gl_Position = projectedPosition;
                    vUv = uv;
                }
            `}
          fragmentShader={`
                varying vec2 vUv;
                void main() {
                    gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
                }
            `}
        />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} position-x={2} position-z={-7.5}>
        <planeGeometry args={[15, 3]} />
        <shaderMaterial
          side={THREE.DoubleSide}
          vertexShader={`
                varying vec2 vUv;
                void main() {
                    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                    vec4 viewPosition = viewMatrix * modelPosition;
                    vec4 projectedPosition = projectionMatrix * viewPosition;

                    gl_Position = projectedPosition;
                    vUv = uv;
                }
            `}
          fragmentShader={`
                varying vec2 vUv;
                void main() {
                    gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
                }
            `}
        />
      </mesh>
    </>
  );
};
