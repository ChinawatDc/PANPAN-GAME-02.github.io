import { useThree } from "@react-three/fiber";
import { CuboidCollider } from "@react-three/rapier";
import React from "react";

const Colliders = () => {
  const { viewport } = useThree();

  return (
    <>
      <CuboidCollider
        restitution={0}
        args={[viewport.width / 2, 0.5, 0.5]}
        position={[0, -(viewport.height / 2 + 0.5), 0]}
      />
      <CuboidCollider
        restitution={0}
        args={[0.5, viewport.height / 2, 0.5]}
        position={[-(viewport.width / 2 + 0.5), 0, 0]}
      />
      <CuboidCollider
        restitution={0}
        args={[0.5, viewport.height / 2, 0.5]}
        position={[viewport.width / 2 + 0.5, 0, 0]}
      />
    </>
  );
};

export default Colliders;
