import { useState } from "react";
import * as style from "./style";
import { AiOutlineExclamation } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Button } from "../Button";
import { Line } from "../Line";

interface IBottomModal {
  title?: string;
}

export const BottomModal: React.FC<IBottomModal> = (props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const bottomModalParams = {
    show: showModal
  };

  return (
    <>
      <Button glowing onClick={openModalHandler}>
        <AiOutlineExclamation />
      </Button>
      <style.SCBottomModal params={bottomModalParams}>
        <style.SCBottomModalContent>
          <style.SCBottomModalHeader>
            {props.title}
            <Button glowing={false} onClick={closeModalHandler}>
              <GrClose />
            </Button>
          </style.SCBottomModalHeader>
          <Line color={"#232023"} />
          <style.SCBottomModalBody>{props.children}</style.SCBottomModalBody>
          <style.SCBottomModalFooter></style.SCBottomModalFooter>
        </style.SCBottomModalContent>
      </style.SCBottomModal>
    </>
  );
};
