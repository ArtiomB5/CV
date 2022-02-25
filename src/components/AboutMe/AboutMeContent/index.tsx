import * as style from "./style";
import * as CONSTANTS from '../../../constants'
import { Images } from "./Images";
import { Text } from "./Text";
import { ButtonsSet } from "../../layout/ButtonsSet";
import { Line } from "../../layout/Line";
import { BackButton } from "../../BackButton";

export const AboutMeContent = () => {
  const btns = [
    {
      path: CONSTANTS.HIRE_ME_PATH,
      btnName: "LinkedIn",
      glowing: false,
      anchor: true
    },
    {
      path: CONSTANTS.EMAIL,
      btnName: "Email me",
      glowing: false,
      anchor: true
    },
    {
      path: CONSTANTS.GET_CV,
      btnName: "Download CV",
      glowing: true,
      anchor: true
    },
    {
      path: CONSTANTS.GITHUB,
      btnName: "GitHub",
      glowing: false,
      anchor: true
    }
  ];

  return (
    <style.AboutMeContent>
      <BackButton arrow={"right"} />
      <Images />
      <Text />
      <ButtonsSet btns={btns} gridArea={"c"} />
      <Line />
    </style.AboutMeContent>
  );
};
