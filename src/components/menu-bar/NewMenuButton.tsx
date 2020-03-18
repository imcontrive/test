import React, { FunctionComponent } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type OwnProps = {
  icon: IconProp;
  text: string;
};

type Props = OwnProps;

const NewMenuButton: FunctionComponent<Props> = props => {
  return (
    <div className="menu-tab-button-new">
      <FontAwesomeIcon icon={props.icon} size="lg" />
      <div>{props.text}</div>
    </div>
  );
};

export default NewMenuButton;