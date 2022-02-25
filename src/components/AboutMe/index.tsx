import * as style from "./style";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Footer } from "../Footer";
import { AboutMeContent } from "./AboutMeContent";

export const AboutMe = () => {
  return (
    <style.AboutMeWrapper>
      <style.AboutMe>
        <AboutMeContent />
        <Experience />
        <Skills />
        <Footer />
      </style.AboutMe>
    </style.AboutMeWrapper>
  );
};
