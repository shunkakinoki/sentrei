// Code from https://codesandbox.io/s/vaporwave-forked-b9873

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const VaporGrid = () => {
  const SIZE = 100;
  const SEGMENTS = 60;
  const gridRef = useRef<THREE.GridHelper>();

  useFrame(({ clock }) => {
    gridRef.current.position.z =
      (clock.getElapsedTime() % 1) * (SIZE / SEGMENTS);
  });
  return (
    <gridHelper
      ref={gridRef}
      position={[0, -3, 0]}
      args={[
        SIZE,
        SEGMENTS,
        new THREE.Color("rgb(217, 70, 239)"),
        new THREE.Color("rgb(217, 70, 239)"),
      ]}
    />
  );
};
