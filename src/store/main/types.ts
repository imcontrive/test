import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type MainState = {
  activeTab: string;
  model: GLTF | null;
  scene: THREE.Scene | null;
};

export enum MainActionTypes {
  CHANGE_ACTIVE_TAB = "CHANGE_ACTIVE_TAB",
  LOAD_MODEL = "LOAD_MODEL",
  SET_SCENE = "SET_SCENE"
}
