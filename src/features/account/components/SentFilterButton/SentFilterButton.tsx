import React from "react";
import { Button } from "@material-ui/core";

import "./SentFilterButton.scss";
interface SentFilterButtonProps {
  typeStyleButton: boolean;
  title: string;
  onClick?: (evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function typeStyleClass(typeStyleButton: boolean) {
  var valueCSS;
  if (typeStyleButton) {
    valueCSS = "sentFilterButtonClicked";
  }
  return valueCSS;
}
export const SentFilterButton: React.FC<SentFilterButtonProps> = ({
  typeStyleButton,
  title,
  onClick,
}: SentFilterButtonProps) => {
  return (
    <div>
      <Button
        className={`sentFilterButton ${typeStyleClass(typeStyleButton)}`}
        variant={typeStyleButton ? "outlined" : "contained"}
        color="primary"
        onClick={onClick}
        fullWidth
      >
        {title}
      </Button>
    </div>
  );
};
