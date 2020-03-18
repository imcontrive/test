import { action } from "typesafe-actions";
import { MainActionTypes } from "./types";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Scene } from "three";

export const changeActiveTab = (tabName: string) =>
  action(MainActionTypes.CHANGE_ACTIVE_TAB, { tabName });

export const loadModel = (model: GLTF) =>
  action(MainActionTypes.LOAD_MODEL, { model });

export const setScene = (scene: Scene) =>
  action(MainActionTypes.SET_SCENE, { scene });
