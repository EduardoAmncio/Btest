import React from "react";
import { Redirect } from "react-router-dom";
import { closeLabel } from "constants/buttons/labels";
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import "./CloseButton.scss";


interface CloseButtonProps {
  redirectRoute: string;
}

export const CloseButton:React.FC<CloseButtonProps> = ({ redirectRoute }: CloseButtonProps) => {

  const [redirect, setRedirect] = React.useState(false);

  const handleOnClick = () => {
    setRedirect(true);
  }

  return (
    <>
      {redirect ? <Redirect to={redirectRoute} /> : null}
      <Button
        className="closeButton"
        variant="contained"
        onClick={handleOnClick}
        fullWidth
      >
        <div className="propButtonClose" >
          <Close color="primary" className="iconCloseButton" />
          <div className="buttonClose-label">
            {closeLabel}
          </div>
        </div>
      </Button>
    </>
  );
};
