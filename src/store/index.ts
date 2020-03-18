import { combineReducers, createStore } from "redux";
import { MainState } from "./main/types";
import { mainReducer } from "./main/reducer";

export type ApplicationState = {
  main: MainState;
};

const createRootReducer = () =>
  combineReducers<ApplicationState>({
    main: mainReducer
  });

const configureStore = (preloadedState?: any) => {
  const store = createStore(createRootReducer(), preloadedState);
  return store;
};

export default configureStore;
