import { v4 as uuidv4 } from "uuid";
import * as style from "./style";
import { Title } from "../Title";

type listElemType = {
  icon: JSX.Element;
  periodStart: string;
  periodEnd: string;
  place: string;
  text: string;
  degree: string;
};

interface IList {
  list: listElemType[];
  title: string;
}

export const TimeLineList: React.FC<IList> = (props) => {
  const listRender = props.list.map((listElem) => {
    return (
      <style.ListLI key={uuidv4()}>
        <style.ListIcon>{listElem.icon}</style.ListIcon>
        <style.ListPeriod>
          <style.ListDate>{listElem.periodEnd}</style.ListDate>
          <style.ListDate>{listElem.periodStart}</style.ListDate>
        </style.ListPeriod>
        <style.ListContent>
          <style.ListPlace>{listElem.place}</style.ListPlace>
          <style.ListText>{listElem.text}</style.ListText>
          <style.ListText>{listElem.degree}</style.ListText>
        </style.ListContent>
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
