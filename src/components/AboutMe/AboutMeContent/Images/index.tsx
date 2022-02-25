import * as style from "./style";
import * as CONSTANTS from '../../../../constants'
import linkedin from "../../../../imgs/li.png";
import email from "../../../../imgs/email.png";
import photo from "../../../../imgs/photo.png";
import { Email } from "../../../layout/Email";

export const Images = () => {
  return (
    <style.Images>
      <style.IMG imgURL={linkedin} circle={false} />
      <style.IMG imgURL={email} circle={false} />
      <Email email={CONSTANTS.EMAIL} />
      <style.IMG imgURL={photo} circle={true} />
    </style.Images>
  );
};
