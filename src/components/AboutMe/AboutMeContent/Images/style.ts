import styled from "styled-components";

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  grid-area: i;
  width: 100%;

  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`;

export const IMG = styled.div<{ imgURL: string; circle: boolean }>`
  border-radius: ${(props) => (props.circle ? "50%" : "0")};
  background-image: url(${(props) => props.imgURL});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (orientation: portrait) {
    width: 13vh;
    height: 13vh;
  }

  @media screen and (orientation: landscape) {
    width: 13vw;
    height: 13vw;
  }

  @media (max-width: 425px) {
    display: ${(props) => (props.circle ? "block" : "none")};
    height: 35vh;
    width: 35vh;
  }
`;
