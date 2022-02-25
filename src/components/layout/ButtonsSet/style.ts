import styled from "styled-components";
import { Link } from "react-router-dom";

type btnPropsType = {
  gridArea: string;
};

export const ButtonsSet = styled.div<{ btnProps: btnPropsType }>`
  grid-area: ${(props) => props.btnProps.gridArea};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (orientation: portrait) {
    flex-direction: column;
    width: 50vw;
    height: 50vh;
    margin: 2vh auto;
  }

  @media screen and (orientation: landscape) {
    flex-direction: row;
    width: 95%;
    height: 50%;
    margin: 2vw auto;
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
