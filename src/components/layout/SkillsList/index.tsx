import { v4 as uuidv4 } from "uuid";
import * as style from "./style";
import { BottomModal } from "../BottomModal";
import { Title } from "../Title";

type listElemType = {
  icon: JSX.Element | string;
  text: string;
  modal?: boolean;
  modalText?: string;
};

interface IList {
  list: listElemType[];
  title: string;
}

export const SkillsList: React.FC<IList> = (props) => {
  const listRender = props.list.map((listElem) => {
    return (
      <style.ListLI key={uuidv4()}>
        <style.ListIcon>{listElem.icon}</style.ListIcon>
        <style.ListContent>{listElem.text}</style.ListContent>
        {listElem.modal ? (
          <BottomModal title={listElem.text}>{listElem.modalText}</BottomModal>
        ) : (
          <></>
        )}
      </style.ListLI>
    );
  });

  return (
    <style.List>
      <Title>{props.title}</Title>
      <style.ListUL>{listRender}</style.ListUL>
    </style.List>
  );
};
