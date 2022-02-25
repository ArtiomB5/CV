import styled from "styled-components";
import { Button } from "../Button";

type paramsType = {
  show: boolean;
};

export const SCBottomModal = styled.div<{ params: paramsType }>`
  display: ${(props) => (props.params.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const SCBottomModalContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;
  background-color: #232023;
  padding: 2vh 2vw 2vh 1vw;

  @-webkit-keyframes slideIn {
    from {
      bottom: -300px;
      opacity: 0;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      bottom: -300px;
      opacity: 0;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }
`;
export const SCBottomModalButton = styled(Button)``;
export const SCBottomModalHeader = styled.div`
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const SCBottomModalBody = styled(SCBottomModalHeader)`
  width: 94%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2vh 4vw 2vh 0;
  margin: 0 auto;
`;
export const SCBottomModalFooter = styled(SCBottomModalHeader)`
  background-color: transparent;
`;
