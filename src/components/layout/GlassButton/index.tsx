import * as style from "./style";

interface IGlassButton {
  glowing: boolean;
}

export const GlassButton: React.FC<IGlassButton> = (props) => {
  return (
    <style.GlassButton glowing={props.glowing}>
      {props.children}
    </style.GlassButton>
  );
};
