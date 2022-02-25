import { SCButton } from "./style";

interface IButton {
  glowing: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = (props) => {
  const buttonParams = { glowing: props.glowing };

  return (
    <SCButton params={buttonParams} onClick={props.onClick}>
      {props.children}
    </SCButton>
  );
};
