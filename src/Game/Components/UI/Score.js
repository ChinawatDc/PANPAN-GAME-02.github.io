import React from "react";
import { useScore } from "../../Store/score";
import Panel from "./Panel";
import Bubble from "./Bubble";
import Scoreboard from "./Scoreboard";
import Title from "./Title";
import styled from "styled-components";

const Text = styled.span`
  font-size: ${(props) => props.fontSize}px;
  font-weight: bold;
  color: #f3dea4;
`;

const Score = () => {
  const { score } = useScore();
  return (
    <Panel>
      <Bubble title={"SCORE"} size={300}>
        <Title fontSize={64}>{score}</Title>
        <Text fontSize={24}>คะแนนที่ดีที่สุด</Text>
        <Text fontSize={48}>9999</Text>
      </Bubble>
      {/* <Scoreboard /> */}
    </Panel>
  );
};

export default Score;
