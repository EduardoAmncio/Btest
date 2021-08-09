import React from "react";
import { Button } from "@material-ui/core";
import { activateCardLabel } from "../../../../../constants/buttons/labels";

import "./ActivateCardButton.scss";

export const ActivateCardButton: React.FC = () => {

  return (
    <Button
      className="activateCardButton"
      variant="contained"
      color="primary">
      {activateCardLabel}
    </Button>
  );
};
