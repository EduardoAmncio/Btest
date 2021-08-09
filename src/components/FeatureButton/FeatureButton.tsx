import React from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import "./FeatureButton.scss";

interface FeatureButtonProps {
  imagePath: string;
  title: string;
  redirectRoute: string
}

export const FeatureButton:React.FC<FeatureButtonProps> = ({ title, imagePath, redirectRoute }: FeatureButtonProps) => {
  
  const [redirect, setRedirect] = React.useState(false);

  const handleOnClick = () => {
    setRedirect(true);
  }

  return (
    <>
      {redirect ? <Redirect to={redirectRoute} /> : null}
      <Button
        className="ftButton"
        variant="outlined"
        color="primary"
        onClick={handleOnClick}
        fullWidth
      >
        <div className="propButton" >
          <img src={imagePath} className="iconFtButton" alt="ftButton" />
          <div className="label"> 
          {title}  
          </div>
        </div>
      </Button>
    </>
  );
};
