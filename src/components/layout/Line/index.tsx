import { SCLine } from "./style";

interface ILine {
  color?: string;
}

export const Line: React.FC<ILine> = (props) => {
  return <SCLine finishColor={props.color} />;
};
