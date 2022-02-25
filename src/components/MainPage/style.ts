import styled from "styled-components";

export const Main = styled.div<{ bgIMG: string }>`
  display: grid;
  grid-template-areas:
    ". t ."
    ". . ."
    ". . ."
    ". . ."
    ". b ."
    ". . ."
    ". f .";
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 0.1fr 15px;
  grid-template-columns: 5% 1fr 5%;
  text-align: center;
  background-image: url(${(props) => props.bgIMG});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-color: black;
  background-position: center;
  height: 100vh;

  @media (max-width: 768px) {
  };

  @media screen and (orientation: portrait) {
  };

  @media screen and (orientation: landscape) {
    background-size: auto 100%;
  };
`;
