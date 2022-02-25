import styled from "styled-components";

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-weight: 700;

  @media (max-width: 768px) {
  }

  @media screen and (orientation: portrait) {
    font-size: 3vh;
  }

  @media screen and (orientation: landscape) {
    font-size: 2.5vw;
  }
`;
