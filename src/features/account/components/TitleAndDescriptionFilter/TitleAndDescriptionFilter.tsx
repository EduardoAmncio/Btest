import React from "react";
import { Typography } from "@material-ui/core";
import  "./TitleAndDescriptionFilter.scss";

interface TitleAndDescriptionFilterProps {
  title: string;
  description: string;
}

export const TitleAndDescriptionFilter = ({ title, description }: TitleAndDescriptionFilterProps) => {
  
  return (
    <div>
      <Typography className="props-title-filter" variant="subtitle2">
        <strong> {title} </strong>
      </Typography>
      <Typography className="props-description-filter" variant="caption">
        {description}
      </Typography>
    </div>
  );
};
