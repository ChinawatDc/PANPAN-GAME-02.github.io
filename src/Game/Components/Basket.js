import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import React, { Suspense } from "react";
import styled from "styled-components";
import Spawner from "./Spawner";
import Fruit from "./Fruit";
import { useFruits } from "../Store/fruits";
import Colliders from "./Colliders";
import { OrthographicCamera, Plane } from "@react-three/drei";
import TopLine from "./TopLine";
import Background from "./Background";

const StyledBasket = styled.div`
  width: 620px;
  height: 815px;
`;

const Basket = () => {
  const { fruits } = useFruits();
  return (
    <StyledBasket>
      <Canvas>
        <Suspense>
          <Physics debug>
            <Spawner />
            <TopLine />
            <Colliders />
            <Background />
            {fruits.map((fruit) => {
              return <Fruit key={fruit.id} {...fruit} />;
            })}
          </Physics>
          <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={50} />
        </Suspense>
      </Canvas>
    </StyledBasket>
  );
};

export default Basket;
