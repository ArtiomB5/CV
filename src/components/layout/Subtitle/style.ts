import styled from "styled-components";

export const Subtitle = styled.h2`
  font-weight: 700;

  @media screen and (orientation: portrait) {
    font-size: 3.5vh;
    line-height: 4vh;
  }

  @media screen and (orientation: landscape) {
    font-size: 3.5vw;
    line-height: 4vw;
  }
`;
