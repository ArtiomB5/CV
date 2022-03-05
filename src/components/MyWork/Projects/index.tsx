import * as style from "./style";
import * as CONSTANTS from '../../../constants';
import { ProjectsList } from "../../layout/ProjectsList";
import { Line } from "../../layout/Line";

export const Projects = () => {
  const projects = [
    {
      title: CONSTANTS.KANBAN_TITLE,
      description: CONSTANTS.KANBAN_DESC,
      link: CONSTANTS.KANBAN_LINK
    },
    {
      title: CONSTANTS.CURRENCY_CONVERTER_TITLE,
      description: CONSTANTS.CURRENCY_CONVERTER_DESC,
      link: CONSTANTS.CURRENCY_CONVERTER_LINK
    },
    {
      title: CONSTANTS.ONLINE_LEARNING_APP_TITLE,
      description: CONSTANTS.ONLINE_LEARNING_APP_TITLE,
      link: CONSTANTS.ONLINE_LEARNING_APP_LINK
    },
    {
      title: CONSTANTS.HUAWEI_NOVA8_LADING_TITLE,
      description: CONSTANTS.HUAWEI_NOVA8_LADING_DESC,
      link: CONSTANTS.HUAWEI_NOVA8_LADING_LINK
    },
    {
      title: CONSTANTS.UMD_STATIC_SITE_TITLE,
      description: CONSTANTS.UMD_STATIC_SITE_DESC,
      link: CONSTANTS.UMD_STATIC_SITE_LINK
    },
    {
      title: CONSTANTS.HUAWEI_WATCH_GT_2_PAGE_TITLE,
      description: CONSTANTS.HUAWEI_WATCH_GT_2_PAGE_DESC,
      link: CONSTANTS.HUAWEI_WATCH_GT_2_PAGE_LINK
    },
    {
      title: CONSTANTS.APPLE_EVENT2021_PAGE_TITLE,
      description: CONSTANTS.APPLE_EVENT2021_PAGE_DESC,
      link: CONSTANTS.APPLE_EVENT2021_PAGE_LINK
    }
  ];

  return (
    <style.WorkPageBtns>
      <ProjectsList elemsArray={projects} listTitle={CONSTANTS.PROJECTS_LIST_TITLE} />
      <Line />
    </style.WorkPageBtns>
  );
};
