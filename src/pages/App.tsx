import React, { FunctionComponent } from "react";
import MenuBar from "../components/menu-bar/MenuBar";
import { Provider } from "react-redux";
import configureStore from "../store";
import WorkField from "../components/work-field/WorkField";

type OwnProps = {};

type Props = OwnProps;

const store = configureStore();

const App: FunctionComponent<Props> = () => {
  return (
    <Provider store={store}>
      <div>
        <MenuBar />
        <WorkField />
      </div>
    </Provider>
  );
};

export default App;
