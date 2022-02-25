import styled from "styled-components";

export const GlassButton = styled.button<{ glowing: boolean }>`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  cursor: pointer;
  margin: 0.5vh 0.5vw;

  &:before {
    content: "";
    background: linear-gradient(45deg, black, #a420c885, #4617e485, black);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: ${(props) => (props.glowing ? "1" : "0")};
    transition: opacity 0.3s ease-in-out;
    animation: glowing 40s linear infinite;

    @media screen and (orientation: portrait) {
      border-radius: 7.5vh;
    }

    @media screen and (orientation: landscape) {
      border-radius: 6.5vh;
    }
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
    @media screen and (orientation: portrait) {
      border-radius: 7.5vh;
    }

    @media screen and (orientation: landscape) {
      border-radius: 6.5vh;
    }
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

  @media (max-width: 768px) {
  }

  @media screen and (orientation: portrait) {
    min-width: 60vw;
    padding: 0 3vh;
    height: 6vh;
    border-radius: 7.5vh;
    font-size: 3vh;
  }

  @media screen and (orientation: landscape) {
    min-width: 18vw;
    padding: 0 3vw;
    height: 6.5vh;
    border-radius: 6.5vh;
    font-size: 1.6vw;
  }
`;
