import React from "react";
import { Button } from "@material-ui/core";

import "./TagButtonSummary.scss";

interface TagButtonSummaryProps {
  label: string;
}

export const TagButtonSummary: React.FC<TagButtonSummaryProps> = ({label}: TagButtonSummaryProps) => {

  return (
    <Button
      className="tagButton"
      variant="contained"
>
      {label}
    </Button>
  );
};