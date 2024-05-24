import React from "react";
import Basket from "./Components/Basket";
import styled from "styled-components";
import Score from "./Components/UI/Score";
import NextFruit from "./Components/UI/NextFruit";

const StyledGame = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(189, 141, 84);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Game = () => {
  return (
    <StyledGame>
      <Score />
      <Basket />
      <NextFruit />
    </StyledGame>
  );
};

export default Game;
