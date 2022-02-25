import styled from "styled-components";

export const Text = styled.div`
  background: transparent;
  grid-area: t;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 3% 3%;
`;

export const Title = styled.div`
  @media screen and (orientation: portrait) {
    font-size: 3vh;
    line-height: 4vh;
  }

  @media screen and (orientation: landscape) {
    font-size: 3vw;
    line-height: 4vw;
  }
`;
export const Subtitle = styled.div`
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
