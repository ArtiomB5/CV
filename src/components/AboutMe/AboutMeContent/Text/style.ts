import styled from "styled-components";

export const Text = styled.div`
  grid-area: t;
  width: 100%;
  color: white;

  @media screen and (orientation: portrait) {
    font-size: 3vh;
    line-height: 3.5vh;
    margin: 3.5vh auto;
  }

  @media screen and (orientation: landscape) {
    font-size: 3vw;
    line-height: 3.5vw;
    margin: 3.5vw auto;
  }
`;
