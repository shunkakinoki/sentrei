// Code from https://codesandbox.io/s/vaporwave-forked-b9873

import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

export const Grid = () => {
  const SIZE = 80;
  const SEGMENTS = 60;
  const gridRef = useRef<THREE.GridHelper>();

  useFrame(({ clock }) => {
    gridRef.current.position.z =
      (clock.getElapsedTime() % 1) * (SIZE / SEGMENTS);
  });
  return (
    <gridHelper
      ref={gridRef}
      position={[0, -10, 0]}
      args={[
        SIZE,
        SEGMENTS,
        new THREE.Color(0x39f5e6),
        new THREE.Color(0x39f5e6),
      ]}
    />
  );
};
