import styled from "styled-components";

export const ProjectsList = styled.div``;

export const list = styled.div`
  padding: 0 4vw;
  margin: 50px auto;
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const element = styled.a`
  display: block;
  width: 100%;
  padding: 10px 10px 40px 10px;
  position: relative;
  min-height: 4vh;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: left;
  cursor: pointer;
  margin: 2vh 3vw;
  min-height: 10vh;

  @media screen and (orientation: portrait) {
    border-radius: 3vh;
    margin: 2vh auto;
  }

  @media screen and (orientation: landscape) {
    border-radius: 2vw;

    @media (max-width: 667px) {
      margin: 2vh auto;
    }
  }

  &:hover h2 {
    top: 0px;
    opacity: 0.6;
    color: black;
  }
`;

export const Number = styled.h2`
  font-size: 10vh;
  margin: 0;
  position: absolute;
  opacity: 0.05;
  top: 50px;
  right: 10px;
  transition: all 0.3s ease-in-out;
  z-index: 1;
`;

export const ListText = styled.p`
  color: white;
  margin-top: 5px;
  z-index: 2;

  @media screen and (orientation: portrait) {
    font-size: 3vh;
    line-height: 3.1vh;
  }

  @media screen and (orientation: landscape) {
    font-size: 1vw;
    line-height: 1.1vw;

    @media (max-width: 768px) {
      font-size: 3.4vw;
      line-height: 3.5vw;
    }
  }
`;

export const SubTitle = styled.h3`
  color: white;
  margin-bottom: 5px;
  z-index: 2;

  @media screen and (orientation: portrait) {
    font-size: 3.6vh;
    line-height: 3.7vh;
  }

  @media screen and (orientation: landscape) {
    font-size: 1.5vw;
    line-height: 1.6vw;

    @media (max-width: 768px) {
      font-size: 4vw;
      line-height: 4.1vw;
    }
  }
`;
