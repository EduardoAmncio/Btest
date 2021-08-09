import React from "react";
import { Button } from "@material-ui/core";
import { accessAccountLabel } from "../../../../../constants/buttons/labels";

import "./AccessAccountButton.scss";

export const AccessAccountButton: React.FC = () => {

  return (
    <Button
      className="accessAccountButton"
      variant="outlined"
      color="primary">
      {accessAccountLabel}
    </Button>
  );
};
