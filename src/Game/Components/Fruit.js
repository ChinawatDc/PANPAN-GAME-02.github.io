import { Circle } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useCallback, useMemo } from "react";
import { useFruits } from "../Store/fruits";
import fruits from "../Utils/fruits";
import { useScore } from "../Store/score";

const Fruit = (props) => {
  const { fruits: currentFruits, setFruits } = useFruits();
  const { addPoints } = useScore();
  const { viewport } = useThree();

  const radius = useMemo(() => {
    return viewport.width / props.ratio / 2;
  }, [viewport.width, props.ratio]);

  const handleCollision = useCallback(
    (manifold, target, other) => {
      const fruitA = target.rigidBodyObject.fruit;
      const fruitB = other.rigidBodyObject.fruit;
      if (fruitA.index === fruitB.index) {
        if (fruitA.id > fruitB.id) {
          const { x, y, z } = manifold.solverContactPoint(0);
          const nextIndex = fruitA.index === 10 ? 0 : fruitA.index + 1;
          const newFruit = {
            ...fruits[nextIndex],
            position: [x, y, z],
            id: Date.now(),
          };
          const filteredFruits = currentFruits.filter(
            (fruit) => fruit.id !== fruitA.id && fruit.id !== fruitB.id
          );
          addPoints(fruitA.points);
          setFruits([...filteredFruits, newFruit]);
        }
      }
    },
    [setFruits, currentFruits, addPoints]
  );
  console.log(props.image);
  return (
    <RigidBody
      colliders="ball"
      restitution={0}
      enabledRotations={[false, false, true]}
      enabledTranslations={[true, true, false]}
      mass={props.mass}
      fruit={props}
      onCollisionEnter={({ manifold, target, other }) => {
        if (other.rigidBodyObject) {
          handleCollision(manifold, target, other);
        }
      }}
    >
      <Circle args={[radius, 32]} position={props.position}>
        <meshBasicMaterial map={props.image} transparent={false} color={0xffffff} depthTest={false} />
      </Circle>
    </RigidBody>
  );
};

export default Fruit;
