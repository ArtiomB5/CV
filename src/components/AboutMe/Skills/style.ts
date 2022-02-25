import styled from "styled-components";

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: top;
  width: 100%;

  @media screen and (orientation: portrait) {
    flex-direction: column;
  }

  @media screen and (orientation: landscape) {
    flex-direction: row;
  }
`;

export const SkillsWrapper = styled.div`
  grid-area: s;
`;
