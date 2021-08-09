import React from "react";
import { Typography } from "@material-ui/core";
import "./TitleAndDescritionPassword.scss";

interface TitleAndDescritionPasswordProps {
    title?: string;
    description?: string;
}

export const TitleAndDescritionPassword = ({ title, description }: TitleAndDescritionPasswordProps) => {
  
    return (
      <div className="contentTitleDescriptionPassword">
        <Typography className="propsTitlePassword" variant="body1" gutterBottom>
          {title}
        </Typography>
        <Typography className="prosDescriptionPassword" variant="body2" gutterBottom>
          {description}
        </Typography>
      </div>
    );
  };