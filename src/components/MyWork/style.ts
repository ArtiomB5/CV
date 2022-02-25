import styled from "styled-components";

export const WorkWrapper = styled.div`
  background: black;
  min-height: 100vh;
`;

export const Work = styled.div`
  display: grid;
  grid-template-areas:
    ". . ."
    ". btns ."
    ". aced ."
    ". imte ."
    ". bgnr ."
    ". f .";
  grid-template-rows: 15px auto auto auto auto 15px;
  grid-template-columns: 5% 1fr 5%;
  align-items: center;
  text-align: center;
  color: white;
`;
