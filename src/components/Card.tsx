import { CSSProperties } from "react";
import styled, { css } from "styled-components";

export const Card = styled.div<{
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  noHover?: boolean;
}>`
  padding: 32px;
  background-color: #3c4f6b;
  border-radius: 32px;
  transition: ease 0.2s all;
  opacity: 0.85;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0);
  overflow: hidden;
  color: white;
  ${({ width }) => css`
    width: ${width};
  `};
  ${({ height }) => css`
    height: ${height};
  `};
  ${({ noHover }) =>
    !noHover &&
    css`
      &:hover {
        opacity: 1;
        transform: scale(1.05);
        transition: ease 0.1s all;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
      }
    `};
`;
