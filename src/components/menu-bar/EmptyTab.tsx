import React, { FunctionComponent } from "react";

type OwnProps = {};

type Props = OwnProps;

const EmptyTab: FunctionComponent<Props> = props => {
  return (
    <div className="empty-tab">
      <h3>There are no menu links yet.</h3>
    </div>
  );
};

export default EmptyTab;
