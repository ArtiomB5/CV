import * as style from "./style";
import * as CONSTANTS from '../../../constants'
import { SkillsList } from "../../layout/SkillsList";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiHandshake,
  SiJest,
  SiSass,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiVisualstudiocode
} from "react-icons/si";
import { FaLanguage, FaYandex } from "react-icons/fa";
import { Line } from "../../layout/Line";

export const Skills = () => {
  const langs = [
    {
      icon: <SiJavascript />,
      text: "Javascript"
    },
    {
      icon: <SiTypescript />,
      text: "Typescript"
    },
    {
      icon: <SiHtml5 />,
      text: "HTML"
    },
    {
      icon: <SiCss3 />,
      text: "CSS"
    },
    {
      icon: "1C",
      text: CONSTANTS.TITLE_1C,
      modal: true,
      modalText: CONSTANTS.DESC_1C
    }
  ];

  const communicationLangs = [
    {
      icon: <FaLanguage />,
      text: `Russian (Native)`
    },
    {
      icon: <FaLanguage />,
      text: "English (A2)"
    }
  ];

  const frameworksAndLibs = [
    {
      icon: <SiSass />,
      text: "SASS"
    },
    {
      icon: <FaYandex />,
      text: "BEM"
    },
    {
      icon: <SiReact />,
      text: "React"
    },
    {
      icon: <SiRedux />,
      text: "Redux"
    },
    {
      icon: <SiRedux />,
      text: "Redux Thunk"
    },
    {
      icon: <SiRedux />,
      text: "Redux Toolkit"
    },
    {
      icon: <SiStyledcomponents />,
      text: "Styled Components"
    },
    {
      icon: <SiGit />,
      text: "Material UI"
    },
    {
      icon: <SiJest />,
      text: "TDD (Jest)"
    },
  ];

  const softSkills = [
    {
      icon: <SiHandshake />,
      text: CONSTANTS.PUBLIC_SPEAKER_SKILL_TITLE,
      modal: true,
      modalText:
      CONSTANTS.PUBLIC_SPEAKER_SKILL_DESC
    },
    {
      icon: <SiHandshake />,
      text: CONSTANTS.ORGANIZED_SKILL_TITLE,
      modal: true,
      modalText: CONSTANTS.ORGANIZED_SKILL_DESC
    },
    {
      icon: <SiHandshake />,
      text: CONSTANTS.ENTHUSIASTIC_TITLE,
      modal: true,
      modalText: CONSTANTS.ENTHUSIASTIC_DESC
    },
    {
      icon: <SiHandshake />,
      text: CONSTANTS.AVID_LEARNER_TITLE,
      modal: true,
      modalText: CONSTANTS.AVID_LEARNER_DESC,
    },
    {
      icon: <SiHandshake />,
      text: CONSTANTS.MENTOR_TITLE,
      modal: true,
      modalText:CONSTANTS.MENTOR_DESC,
    },
    {
      icon: <SiHandshake />,
      text: CONSTANTS.SR_TITLE,
      modal: true,
      modalText: CONSTANTS.SR_DESC
    }
  ];

  const tools = [
    {
      icon: <SiVisualstudiocode />,
      text: "VS Code"
    },
    {
      icon: <SiGit />,
      text: "Git"
    },
    {
      icon: "A",
      text: "Autocad"
    }
  ];

  return (
    <style.SkillsWrapper>
      <style.Skills>
        <SkillsList list={langs} title={"Languages"} />
        <SkillsList list={frameworksAndLibs} title={"Frameworks + Libraries"} />
        <SkillsList list={softSkills} title={"Soft Skills"} />
        <SkillsList list={tools} title={"Tools"} />
        <SkillsList
          list={communicationLangs}
          title={"Communication Languages"}
        />
      </style.Skills>
      <Line />
    </style.SkillsWrapper>
  );
};
