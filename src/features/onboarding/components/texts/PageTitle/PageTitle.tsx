import { Typography } from "@material-ui/core";
import React from "react";

interface TextProps {
  text: string;
}

export const PageTitle = ({text}: TextProps) => {
  return (
    <Typography variant="h6" align="left">
      <strong>
      {text}
      </strong>
    </Typography>
  );
};
