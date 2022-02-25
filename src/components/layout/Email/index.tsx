import * as style from "./style";
import { Button } from "../Button";
import { MdContentCopy } from "react-icons/md";

interface IEmail {
  email: string;
}

export const Email: React.FC<IEmail> = (props) => {
  const onclickHandler = () => {
    navigator.clipboard.writeText(props.email);
    alert(`Email: "${props.email}" copied!`);
  };

  return (
    <style.Email>
      <div>{props.email}</div>
      <Button glowing={true} onClick={onclickHandler}>
        <MdContentCopy />
      </Button>
    </style.Email>
  );
};
