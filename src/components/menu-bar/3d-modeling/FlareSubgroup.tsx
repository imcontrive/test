import React, { FunctionComponent } from "react";
import MenuButton from "../MenuButton";
import { faCrosshairs, faFlask } from "@fortawesome/free-solid-svg-icons";

type OwnProps = {}

type Props = OwnProps;

const FlareSubgroup: FunctionComponent<Props> = (props) => {

  return <div className="d-flex">
    <MenuButton text="Flare" icon={faFlask}/>
    <MenuButton text="Base Plate" icon={faCrosshairs}/>
    <MenuButton text="Flare Splice" icon={faCrosshairs}/>
    <MenuButton text="Flare Tip" icon={faCrosshairs}/>
    <MenuButton text="Inlet Nozzle" icon={faCrosshairs}/>
    <MenuButton text="Platforms" icon={faCrosshairs}/>
    <MenuButton text="Ladders" icon={faCrosshairs}/>
    <MenuButton text="Trunsion" icon={faCrosshairs}/>
    <MenuButton text="Tailing Lug" icon={faCrosshairs}/>
    <MenuButton text="Lifting Lug" icon={faCrosshairs}/>
    <MenuButton text="Pipe Along" icon={faCrosshairs}/>
    <MenuButton text="Ring Stiffener" icon={faCrosshairs}/>
    <MenuButton text="Helical Strakes" icon={faCrosshairs}/>
    <MenuButton text="Vertical Stiffener" icon={faCrosshairs}/>
    <MenuButton text="Damper" icon={faCrosshairs}/>
    <MenuButton text="Guy Wire" icon={faCrosshairs}/>
    <MenuButton text="Optimized Flare" icon={faCrosshairs}/>
  </div>;
};

export default FlareSubgroup;
