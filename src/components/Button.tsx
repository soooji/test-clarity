import { CSSProperties } from "react";
import styled from "styled-components";

export const Button = styled.button<{
  background?: CSSProperties["backgroundColor"];
}>`
  padding: 32px;
  background-color: ${({ background }) => background ?? "#fc7979"};
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 24px;
  color: white;
  transition: ease 0.2s all;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: ease 0.1s all;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;
