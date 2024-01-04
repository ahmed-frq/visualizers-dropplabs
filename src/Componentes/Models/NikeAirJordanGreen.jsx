import React, { Suspense } from "react";
import { Stage, useGLTF, Float } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const NikeAirJordanGreen = () => {
  const { scene } = useGLTF("./nike-air-jordan-1-green-pbr (1).glb");

  return (
    <>
      <OrbitControls maxPolarAngle={Math.PI / 2} minDistance={0.2} maxDistance={1} enablePan={false}/>

      <Stage>
        <Float floatingRange={[0.01, 0.05]}>
          <Suspense fallback={null}>
            <primitive object={scene} rotation={[0, Math.PI / 2, 0]} />
          </Suspense>
        </Float>
      </Stage>
    </>
  );
};

export default NikeAirJordanGreen;
