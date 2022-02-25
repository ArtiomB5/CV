import * as style from "./style";
import { Title } from "../../../layout/Title";
import { Subtitle } from "../../../layout/Subtitle";

export const Text = () => {
  const title = "HI,I'AM ARTIOM BORISOV,";
  const subtitleBottom = "Frontend developer (React) developer";
  const objectiveTitle = "OBJECTIVE:";
  const objectiveText =
    "Self driven junior frontend developer with a desire to acquire new knowledge and apply it as a software engineer.";

  return (
    <style.Text>
      <Title>{title}</Title>
      <Subtitle>{subtitleBottom}</Subtitle>
      <Title>{objectiveTitle}</Title>
      <Subtitle>{objectiveText}</Subtitle>
    </style.Text>
  );
};
