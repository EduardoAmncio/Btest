import React from "react";
import { Button } from "@material-ui/core";
import { useStyle } from "./TagButton.style";

import "./TagButtonFilter.scss";

interface TagButtonFilterProps {
  label: string;
}

export const TagButtonFilter: React.FC<TagButtonFilterProps> = ({ label }: TagButtonFilterProps) => {

  const style = useStyle();
  return (
    <Button
      className={style.TagButtonFilter}
      variant="contained"
    >
      {label}
    </Button>
  );
};