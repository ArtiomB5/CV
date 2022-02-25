import styled from "styled-components";

type buttonPropsType = {
  glowing: boolean;
};

export const SCButton = styled.button<{ params: buttonPropsType }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: #1a1a1a;
  position: relative;
  z-index: 0;
  border-radius: 50%;
  margin: 5px;

  cursor: pointer;

  @media screen and (orientation: portrait) {
    padding: 1vh;
    font-size: 3vh;
  }

  @media screen and (orientation: landscape) {
    padding: 0.5vw;
    font-size: 1.5vw;
  }

  &:before {
    content: "";
    background: linear-gradient(45deg, white, #a420c885, #4617e485, white);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: ${(props) => (props.params.glowing ? "1" : "0")};
    transition: opacity 0.3s ease-in-out;
    border-radius: 50%;
    animation: glowing 45s linear infinite;
  }
  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
