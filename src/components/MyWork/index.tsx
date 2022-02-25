import * as style from "./style";
import { WorkPageButtons } from "./WorkPageButtons";
import { Footer } from "../Footer";
import { Projects } from "./Projects";

export const MyWork = () => {
  return (
    <style.WorkWrapper>
      <style.Work>
        <WorkPageButtons />
        <Projects />
        <Footer />
      </style.Work>
    </style.WorkWrapper>
  );
};
