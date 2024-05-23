import { useFrame, useThree } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSpawner } from "../Store/spawner";
import { Circle, Line } from "@react-three/drei";
import { useFruits } from "../Store/fruits";

const Spawner = () => {
  const [position, setPosition] = useState([0, 0, 0]);
  const [canPlay, setCanplay] = useState(true);
  const { currentFruit, changeFruits } = useSpawner();
  const { viewport } = useThree();
  const { addFruit } = useFruits();

  const radius = useMemo(() => {
    return viewport.width / currentFruit.ratio / 2;
  }, [viewport.width, currentFruit.ratio]);

  useFrame(({ mouse }) => {
    let x = (mouse.x * viewport.width) / 2;
    if (x > viewport.width / 2 - radius) {
      x = viewport.width / 2 - radius;
    }
    if (x < -(viewport.width / 2) + radius) {
      x = -(viewport.width / 2) + radius;
    }
    setPosition([x, viewport.height / 2 - radius, 0]);
  });

  const onClick = useCallback(() => {
    if (canPlay) {
      const fruit = {
        ...currentFruit,
        position,
      };
      addFruit(fruit);
      changeFruits();
      setCanplay(false);
      setTimeout(() => {
        setCanplay(true);
      }, 1000);
    }
  }, [position, addFruit, currentFruit, canPlay, changeFruits]);

  useEffect(() => {
    document.addEventListener("click", onClick, false);
    return () => document.removeEventListener("click", onClick);
  }, [onClick]);

  if (!canPlay) {
    return null;
  }

  return (
    <>
      <Circle args={[radius, 32]} position={position}>
        <meshBasicMaterial color={currentFruit.color} />
      </Circle>
      <Line
        points={[
          [position[0], position[1], -1],
          [position[0], -viewport.height / 2, -1],
        ]}
        lineWidth={4}
        color="white"
      />
    </>
  );
};

export default Spawner;
