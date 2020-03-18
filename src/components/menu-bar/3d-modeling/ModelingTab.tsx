import React, { FunctionComponent } from "react";
import MenuButton from "../MenuButton";
import { faCropAlt, faCubes, faFlask, faGopuram } from "@fortawesome/free-solid-svg-icons";
import { Popover } from "@blueprintjs/core";
import { Position } from "@blueprintjs/core/lib/esm/common/position";
import FlareSubgroup from "./FlareSubgroup";
import DerrickTowerSubgroup from "./DerrickTowerSubgroup";
import NewMenuButton from "../NewMenuButton";

type OwnProps = {};

type Props = OwnProps;

const ModelingTab: FunctionComponent<Props> = () => {
  return (
    <div className="d-flex">
      <Popover content={<FlareSubgroup />} position={Position.BOTTOM_RIGHT}>
        <MenuButton text="Flare" icon={faFlask} />
      </Popover>

      <Popover
        content={<DerrickTowerSubgroup />}
        position={Position.BOTTOM_RIGHT}
      >
        <MenuButton text="Derrick Tower" icon={faGopuram} />
      </Popover>

      <NewMenuButton text="Pipe Rack" icon={faCropAlt} />

      <NewMenuButton text="Open Frame" icon={faCubes} />
    </div>
  );
};

export default ModelingTab;
