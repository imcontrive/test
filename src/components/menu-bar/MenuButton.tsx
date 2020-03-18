import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type OwnProps = {
  icon: IconProp;
  text: string;
  onClick?: () => any;
};

type Props = OwnProps;

const MenuButton: FunctionComponent<Props> = props => {
  return (
    <div className="menu-tab-button" onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} size="lg" />
      <div>{props.text}</div>
    </div>
  );
};

export default MenuButton;
