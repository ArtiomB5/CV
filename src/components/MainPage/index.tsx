import * as style from "./style";
import * as CONSTANTS from '../../constants';
import { Text } from "./Text";
import { ButtonsSet } from "../layout/ButtonsSet";
import { Footer } from "../Footer";
import bg from "../../imgs/bg_laptop.jpg";

export const MainPage = () => {
  const btns = [
    {
      path: CONSTANTS.ABOUT_ME_PATH,
      btnName: CONSTANTS.ABOUT_ME_TITLE,
      glowing: false,
      anchor: false,
      scroll: false,
    },
    {
      path: CONSTANTS.HIRE_ME_PATH,
      btnName: CONSTANTS.HIRE_ME_TITLE,
      glowing: true,
      anchor: true,
      scroll: false,
    },
    {
      path: CONSTANTS.GET_CV,
      btnName: CONSTANTS.GET_CV_TITLE,
      glowing: false,
      anchor: true,
      scroll: false,
    },
    {
      path: CONSTANTS.MY_WORK_PATH,
      btnName: CONSTANTS.MY_WORK_TITLE,
      glowing: false,
      anchor: false,
      scroll: false,
    },
  ];

  return (
    <>
      <style.Main bgIMG={bg}>
        <Text />
        <ButtonsSet btns={btns} gridArea={"b"} />
        <Footer />
      </style.Main>
    </>
  );
};
