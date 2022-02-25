import * as style from "./style";
import { GlassButton } from "../layout/GlassButton";
import { CgArrowRightO, CgArrowLeftO } from "react-icons/cg";

type propsType = {
  arrow: "left" | "right";
}

export const BackButton = (props: propsType) => {
  return (
    <style.backButton justify={props.arrow}>
      <style.ButtonLink to={"/"}>
        <GlassButton glowing={false}>
          {props.arrow === "left" ? (
            <>
              <CgArrowLeftO />
              <style.title>Back</style.title>
            </>
          ) : (
            <>
              <style.title>Back</style.title>
              <CgArrowRightO />
            </>
          )}
        </GlassButton>
      </style.ButtonLink>
    </style.backButton>
  );
};
