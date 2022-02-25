import styled from "styled-components";
import { Link } from "react-router-dom";

export const backButton = styled.div<{ justify: "left" | "right" }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (orientation: portrait) {
    justify-content: center;
    margin: 3vh auto;
  }

  @media screen and (orientation: landscape) {
    justify-content: ${(props) =>
      props.justify === "left" ? "flex-start" : "flex-end"};
    margin: 3vw auto;
  }
`;

export const title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2vh 1vw;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
