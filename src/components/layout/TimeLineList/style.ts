import styled from "styled-components";

export const List = styled.div`
  font-size: 2.7vh;
  color: white;
`;

export const ListUL = styled.ul`
  margin: 0 auto;
  padding: 0;

  @media screen and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (orientation: landscape) {
    width: 40vw;
  }
`;
export const ListLI = styled.li`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: row;
  min-height: 80px;
  padding: 5px;

  @media screen and (orientation: portrait) {
    margin: 3vh 0;
    border-radius: 3vh;
    width: 100%;
  }

  @media screen and (orientation: landscape) {
    margin: 3vw 0;
    border-radius: 3vw;
  }
`;
export const ListIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
`;
export const ListPeriod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
export const ListDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 50%;
  margin: 0 15px;
`;
export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
export const ListPlace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
export const ListText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
