import React from "react";
import Basket from "./Components/Basket";
import styled from "styled-components";
import Score from "./Components/UI/Score";
import NextFruit from "./Components/UI/NextFruit";

const StyledGame = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(189, 141, 84);
  background: linear-gradient(
    0deg,
    rgba(235, 233, 177, 1) 0%,
    rgba(235, 233, 177, 1) 40%,
    rgba(199, 166, 91, 1) 40%,
    rgba(199, 166, 91, 1) 50%,
    rgba(168, 116, 43, 1) 50%,
    rgba(168, 116, 43, 1) 60%,
    rgba(189, 141, 84, 1) 60%,
    rgba(189, 141, 84, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
