import { ActionType, createReducer } from "typesafe-actions";
import { MainActionTypes, MainState } from "./types";
import * as actions from "./actions";

export type MainAction = ActionType<typeof actions>;

const initialState: MainState = {
  activeTab: "project",
  model: null,
  scene: null
};

const reducer = createReducer<MainState, MainAction>(initialState)
  .handleType(MainActionTypes.CHANGE_ACTIVE_TAB, (state, action) => ({
    ...state,
    activeTab: action.payload.tabName
  }))
  .handleType(MainActionTypes.LOAD_MODEL, (state, action) => ({
    ...state,
    model: action.payload.model
  }))
  .handleType(MainActionTypes.SET_SCENE, (state, action) => ({
    ...state,
    scene: action.payload.scene
  }));

export { reducer as mainReducer };
