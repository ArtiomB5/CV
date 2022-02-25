import * as style from "./style";
import * as CONSTANTS from '../../../constants';
import { TimeLineList } from "../../layout/TimeLineList";
import { GiDiploma, GiMiningHelmet, GiKeyboard } from "react-icons/gi";

export const Experience = () => {
  const education = [
    {
      icon: <GiDiploma />,
      periodStart: "2021",
      periodEnd: "Nowadays",
      place: "IT-incubator",
      text: "ReactJS Development",
      degree: "Junior Frontend Developer"
    },
    {
      icon: <GiDiploma />,
      periodStart: "2020",
      periodEnd: "2020",
      place: "St. Petersburg School of Television",
      text: "Speech art courses",
      degree: ""
    },
    {
      icon: <GiDiploma />,
      periodStart: "2019",
      periodEnd: "2019",
      place: 'PA "Belarusian Association of Accountants"',
      text: 'Accounting for beginners "From A to Z"',
      degree: ""
    },
    {
      icon: <GiDiploma />,
      periodStart: "2019",
      periodEnd: "2019",
      place: CONSTANTS.TC_TITLE,
      text: CONSTANTS.TC_REQUESTS_DESC,
      degree: ""
    },
    {
      icon: <GiDiploma />,
      periodStart: "2019",
      periodEnd: "2019",
      place: CONSTANTS.TC_TITLE,
      text: CONSTANTS.TC_FUNDAMENTALS_DESC,
      degree: ""
    },
    {
      icon: <GiDiploma />,
      periodStart: "2019",
      periodEnd: "2019",
      place: CONSTANTS.TC_TITLE,
      text: CONSTANTS.TC_ADMINISTRATION_DESC,
      degree: ""
    },
    {
      icon: <GiDiploma />,
      periodStart: "2018",
      periodEnd: "2018",
      place: "Institute of IT&Business Administration",
      text: "Configuration and programming on the 1C: Enterprise 8.3 platform",
      degree: ""
    },
    {
      icon: <GiDiploma />,
      periodStart: "2016",
      periodEnd: "2016",
      place:
        "IT-Academy of the Educational Center Of Programming and High Technologies",
      text: "IT English Elementary+",
      degree: ""
    },
    {
      icon: <GiDiploma />,
      periodStart: "2014",
      periodEnd: "2015",
      place: CONSTANTS.BNTU_TITLE,
      text: CONSTANTS.BNTU_MASTER_TEXT,
      degree: CONSTANTS.BNTU_MASTER_DESC
    },
    {
      icon: <GiDiploma />,
      periodStart: "2009",
      periodEnd: "2014",
      place: CONSTANTS.BNTU_TITLE,
      text: CONSTANTS.BNTU_SPECIALIST_TEXT,
      degree: CONSTANTS.BNTU_SPECIALIST_DESC
    }
  ];

  const work = [
    {
      icon: <GiKeyboard />,
      periodStart: "2021",
      periodEnd: "Nowadays",
      place: "Self-employed ",
      text: "Junior Frontend Developer",
      degree: "React"
    },
    {
      icon: <GiMiningHelmet />,
      periodStart: "2019",
      periodEnd: "2022",
      place: CONSTANTS.BGHP_TITLE,
      text: CONSTANTS.BGHP_MD_TITLE,
      degree: "Lead Engineer"
    },
    {
      icon: <GiMiningHelmet />,
      periodStart: "2014",
      periodEnd: "2019",
      place: CONSTANTS.BGHP_TITLE,
      text: CONSTANTS.BGHP_MD_TITLE,
      degree: "Engineer"
    },
    {
      icon: <GiMiningHelmet />,
      periodStart: "2012",
      periodEnd: "2014",
      place: CONSTANTS.BGHP_TITLE,
      text: CONSTANTS.BGHP_MD_TITLE,
      degree: "Technician"
    }
  ];

  return (
    <style.Experience>
      <TimeLineList list={work} title={"Work"} />
      <TimeLineList list={education} title={"Education"} />
    </style.Experience>
  );
};
