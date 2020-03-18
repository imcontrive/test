import React, { FunctionComponent } from "react";
import { Dialog, Classes, FormGroup } from "@blueprintjs/core";

type OwnProps = {
  isOpen: boolean;
  onClose: (path?: File) => any;
};

type Props = OwnProps;

const LoadProjectDlg: FunctionComponent<Props> = props => {
  const { isOpen, onClose } = props;

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => onClose()}
      title="Load Project"
      isCloseButtonShown={false}
      className="load-project-dlg"
    >
      <div className={Classes.DIALOG_BODY}>
        <div className="d-flex">
          <div>Select File</div>
        </div>
        <FormGroup label="Select File">
          <input
            type="file"
            onChange={event => {
              const files = event.currentTarget.files;
              if (files) {
                onClose(files[0]);
              }
            }}
          />
        </FormGroup>
      </div>
    </Dialog>
  );
};

export default LoadProjectDlg;
