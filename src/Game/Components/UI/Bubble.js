import styled from "styled-components";
import Title from "./Title";

const BubbleContent = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BubbleTitle = styled.div`
  position: absolute;
  top: -12px;
`;

const Bubble = ({ title, size, children }) => {
  return (
    <BubbleContent size={size}>
      <BubbleTitle>
        <Title>{title}</Title>
      </BubbleTitle>
      {children}
    </BubbleContent>
  );
};

export default Bubble;
