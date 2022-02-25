import { v4 as uuidv4 } from "uuid";
import * as style from "./style";
import { Title } from "../Title";

type elemType = {
  title: string;
  description: string;
  link: string;
};

interface IProjectsList {
  listTitle: string;
  elemsArray: elemType[];
}

export const ProjectsList: React.FC<IProjectsList> = (props) => {
  const listRender = props.elemsArray.map((elem: elemType, index) => {
    return (
      <style.element key={uuidv4()} href={elem.link}>
        <style.Number>
          {String(index + 1).length > 1 ? `${index + 1}` : `0${index + 1}`}
        </style.Number>
        <style.SubTitle>{elem.title}</style.SubTitle>
        <style.ListText>{elem.description}</style.ListText>
      </style.element>
    );
  });

  return (
    <style.ProjectsList>
      <Title>
        {props.elemsArray.length} {props.listTitle}
      </Title>
      <style.list>{listRender}</style.list>
    </style.ProjectsList>
  );
};
