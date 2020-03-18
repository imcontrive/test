import React, { FunctionComponent, useState } from "react";
import MenuButton from "../MenuButton";
import LoadProjectDlg from "./LoadProjectDlg";
import { faFolderOpen, faSave } from "@fortawesome/free-solid-svg-icons";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useDispatch, useSelector } from "react-redux";
import { loadModel } from "../../../store/main/actions";
import { ApplicationState } from "../../../store";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

type OwnProps = {};

type Props = OwnProps;

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/examples/jsm/libs/draco/");
loader.setDRACOLoader(dracoLoader);

const ProjectTab: FunctionComponent<Props> = () => {
  const scene = useSelector((state: ApplicationState) => state.main.scene);
  const dispatch = useDispatch();

  const [isOpenModelDlg, setOpenModelDlg] = useState<boolean>(false);

  return (
    <div className="d-flex">
      <LoadProjectDlg
        isOpen={isOpenModelDlg}
        onClose={file => {
          if (file) {
            file.arrayBuffer().then(buffer => {
              loader.parse(
                buffer,
                "",
                gltf => dispatch(loadModel(gltf)),
                error => console.error(error)
              );
            });
          }
          setOpenModelDlg(false);
        }}
      />
      <MenuButton
        text="Open"
        icon={faFolderOpen}
        onClick={() => setOpenModelDlg(true)}
      />
      <MenuButton
        text="Save"
        icon={faSave}
        onClick={() => {
          scene &&
            new GLTFExporter().parse(
              scene,
              gltf => {
                let link = document.createElement("a");
                link.href =
                  "data:text/plain;charset=utf-8," + JSON.stringify(gltf);
                link.setAttribute("download", "model.gltf");
                link.click();
                link.remove();
              },
              { trs: true, includeCustomExtensions: true }
            );
        }}
      />
    </div>
  );
};

export default ProjectTab;
