import React from "react";
import styled from "styled-components";
import { FaUserNinja } from "react-icons/fa";
import Title from "./Title";
import { useScore } from "../../Store/score";

const StyledScoreboard = styled.div`
  background-color: #fdf7c7;
  height: 400px;
  width: 350px;
  border-radius: 64px;
  padding: 16px;
`;

const Header = styled.div`
  background-color: #f4d570;
  background: radial-gradient(circle, #f4d570 75%, #fdf7c7 100%);
  height: calc(25% - 8px);
  width: 100%;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionHeader = styled.div`
  height: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    font-size: 12px;
    font-weight: bold;
    color: #bf984b;
  }
`;
const Body = styled.div`
  background-color: #f4d570;
  height: calc(50% - 16px);
  width: 100%;
`;

const Item = styled.div`
  background-color: ${(props) => props.color};
  background: ${(props) =>
    `radial-gradient(circle, ${props.color} 75%, #fdf7c7 100%)`};
  height: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  span {
    color: rgba(0, 0, 0, 0.3);
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
`;

const Footer = styled(Item)`
  height: calc(20% - 16px);
`;

const Pagination = styled.div`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const PageIndicator = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.selected ? "#F6EF69" : "#efebdb")};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.75);
`;

const pages = [1, 2, 3, 4, 5, 6];

function Scoreboard() {
  const { score } = useScore();
  return (
    <StyledScoreboard>
      <Header>
        <Title>กระดานคะแนน</Title>
      </Header>
      <SectionHeader>
        <FaUserNinja />
      </SectionHeader>
      <Body>
        <Item color="#F6D978">
          <span>2709</span>
        </Item>
        <Item color="#A0BDCB">
          <span>2701</span>
        </Item>
        <Item color="#F2B16D">
          <span>2155</span>
        </Item>
      </Body>
      <SectionHeader>
        <span>NOW</span>
      </SectionHeader>
      <Footer color="#F6D978">
        <span>{score}</span>
      </Footer>
      <Pagination>
        {pages.map((page) => (
          <PageIndicator key={page} selected={page === 1} />
        ))}
      </Pagination>
    </StyledScoreboard>
  );
}

export default Scoreboard;
