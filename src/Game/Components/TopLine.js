import { Line } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";

const TopLine = () => {
  const { viewport } = useThree();
  return (
    <>
      <Line
        points={[
          [-viewport.width / 2, viewport.height / 4, 1],
          [viewport.width / 2, viewport.height / 4, 1],
        ]}
        color="#F5D583"
        lineWidth={8}
      />
    </>
  );
};

export default TopLine;
