import styled from "styled-components";

export const List = styled.div`
  font-size: 3vh;
  color: white;
  margin: 0 auto;

  @media screen and (orientation: portrait) {
    width: 100%;
  }
`;

export const ListUL = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const ListLI = styled.li`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1vh 2vw;
  width: 80%;

  @media screen and (orientation: portrait) {
    margin: 3vh 0;
    border-radius: 4vh;
  }

  @media screen and (orientation: landscape) {
    margin: 1vw 0;
    border-radius: 4vw;
  }
`;

export const ListIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vh 1vw;
  width: auto;
`;

export const ListContent = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 37vw;
  }
`;
