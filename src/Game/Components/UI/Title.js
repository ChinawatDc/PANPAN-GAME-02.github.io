import styled from "styled-components";

const Title = styled.span`
  font-size: ${(props) => props.fontSize || 32}px;
  font-weight: bold;
  color: #fdf7c7;
  -webkit-text-stroke: 2px #8b6410;
`;

export default Title;
