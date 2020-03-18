import React, { FunctionComponent } from "react";
import MenuButton from "../MenuButton";
import { faFlask, faGopuram } from "@fortawesome/free-solid-svg-icons";

type OwnProps = {};

type Props = OwnProps;

const DerrickTowerSubgroup: FunctionComponent<Props> = props => {
  return (
    <div className="d-flex">
      <MenuButton text="Derrick Tower" icon={faGopuram} />
      <MenuButton text="Base Plate" icon={faFlask} />
    </div>
  );
};

export default DerrickTowerSubgroup;
