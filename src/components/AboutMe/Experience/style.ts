import styled from "styled-components";

export const Experience = styled.div`
  display: flex;
  justify-content: space-around;
  grid-area: e;
  width: 100%;

  @media screen and (orientation: portrait) {
    flex-direction: column;
  }

  @media screen and (orientation: landscape) {
    flex-direction: row;
  }
`;
