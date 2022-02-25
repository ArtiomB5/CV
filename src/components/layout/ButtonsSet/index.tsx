import * as style from "./style";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { GlassButton } from "../GlassButton";
import { Link as ReactScrollLInk } from "react-scroll";

type btn = {
  path: string;
  btnName: string | JSX.Element;
  glowing: boolean;
  anchor?: boolean;
  scroll?: boolean;
};

interface IButtonsSet {
  btns: btn[];
  gridArea: string;
}

export const ButtonsSet: React.FC<IButtonsSet> = (props) => {
  let btnsRender = () =>
    props.btns.map((btn) => {
      if (btn.anchor) {
        return (
          <a href={btn.path} key={uuidv4()}>
            <GlassButton key={uuidv4()} glowing={btn.glowing}>
              {btn.btnName}
            </GlassButton>
          </a>
        );
      } else if (btn.scroll) {
        return (
          <ReactScrollLInk
            to={btn.path}
            spy={true}
            smooth={true}
            duration={500}
            key={uuidv4()}
          >
            <GlassButton key={uuidv4()} glowing={btn.glowing}>
              {btn.btnName}
            </GlassButton>
          </ReactScrollLInk>
        );
      } else if (!btn.scroll) {
        return (
          <style.ButtonLink to={btn.path} key={uuidv4()}>
            <GlassButton key={uuidv4()} glowing={btn.glowing}>
              {btn.btnName}
            </GlassButton>
          </style.ButtonLink>
        );
      }
    });

  let btnsSetProps = {
    gridArea: props.gridArea
  };

  return (
    <style.ButtonsSet btnProps={btnsSetProps}>{btnsRender()}</style.ButtonsSet>
  );
};
