import React from "react";
import styled from "styled-components";
import { useSpawner } from "../../Store/spawner";
import Panel from "./Panel";
import Bubble from "./Bubble";

const Fruit = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const NextFruit = () => {
  const { nextFruit } = useSpawner();
  return (
    <Panel>
      <Bubble title="NEXT" size={250}>
        <Fruit color={nextFruit.color} />
      </Bubble>
      <Bubble title="FRUITS" size={350} />
    </Panel>
  );
};

export default NextFruit;
