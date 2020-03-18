import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs } from "@blueprintjs/core";
import ProjectTab from "./project-tab/ProjectTab";
import ModelingTab from "./3d-modeling/ModelingTab";
import EmptyTab from "./EmptyTab";
import { ApplicationState } from "../../store";
import { changeActiveTab } from "../../store/main/actions";

type StateProps = {
  selectedTab?: string;
};

type Props = StateProps;

const MenuBar: FunctionComponent<Props> = () => {
  const selectedTab = useSelector(
    (state: ApplicationState) => state.main.activeTab
  );

  const dispatch = useDispatch();

  const handleTabChange = (
    newTabId: string,
    prevTabId: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    dispatch(changeActiveTab(newTabId));
  };

  return (
    <div className="menu-bar">
      <img src={require("../../logo.png")} alt="Asets-Lux" />
      <Tabs
        id="TabsExample"
        animate
        large
        onChange={handleTabChange}
        selectedTabId={selectedTab}
        renderActiveTabPanelOnly
      >
        <Tab id="project" title="Project" panel={<ProjectTab />} />
        <Tab id="3d_modeling" title="3D Modeling" panel={<ModelingTab />} />
        <Tab id="analysis" title="Analysis" panel={<EmptyTab />} />
        <Tab id="fba_analysis" title="FBA Analysis" panel={<EmptyTab />} />
        <Tab id="ga_drawing" title="GA Drawing" panel={<EmptyTab />} />
        <Tab id="help" title="Help" panel={<EmptyTab />} />
      </Tabs>
    </div>
  );
};

export default MenuBar;
