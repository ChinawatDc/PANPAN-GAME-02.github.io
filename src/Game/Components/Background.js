import { Line, Plane } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";

function BackGround() {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        args={[viewport.width, viewport.height - viewport.height / 4]}
        position={[0, -(viewport.height / 8), -1]}
      >
        <meshBasicMaterial color="white" transparent opacity={0.2} />
      </Plane>
      <Plane
        args={[
          viewport.width - viewport.width / 6,
          viewport.height - viewport.height / 8,
        ]}
        position={[0, -(viewport.height / 8), -2]}
      >
        <meshBasicMaterial color="white" transparent opacity={0.2} />
      </Plane>
      <Line
        points={[
          [
            -(viewport.width / 2 - viewport.width / 12),
            viewport.height / 3.25,
            -2,
          ],
          [
            viewport.width / 2 - viewport.width / 12,
            viewport.height / 3.25,
            -2,
          ],
        ]}
        color="#F5D583"
        lineWidth={8}
      />
      <Line
        points={[
          [
            -(viewport.width / 2 - viewport.width / 12),
            viewport.height / 3.25,
            -2,
          ],
          [-viewport.width / 2, viewport.height / 4, -2],
        ]}
        color="#F5D583"
        lineWidth={8}
      />
      <Line
        points={[
          [
            viewport.width / 2 - viewport.width / 12,
            viewport.height / 3.25,
            -2,
          ],
          [viewport.width / 2, viewport.height / 4, -2],
        ]}
        color="#F5D583"
        lineWidth={8}
      />
      <Line
        points={[
          [-viewport.width / 2 + 0.08, viewport.height / 4, -2],
          [-viewport.width / 2 + 0.08, -viewport.height / 2, -2],
        ]}
        color="#F5D583"
        lineWidth={8}
      />
      <Line
        points={[
          [viewport.width / 2 - 0.08, viewport.height / 4, -2],
          [viewport.width / 2 - 0.08, -viewport.height / 2, -2],
        ]}
        color="#F5D583"
        lineWidth={8}
      />
    </>
  );
}

export default BackGround;
