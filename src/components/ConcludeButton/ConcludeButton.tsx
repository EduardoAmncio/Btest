import React from "react";
import { Button } from "@material-ui/core";

import "./ConcludeButton.scss";
import { KeyboardArrowRight } from "@material-ui/icons";

interface ConcludeButtonProps {
    title: string;
    onClick?:(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ConcludeButton: React.FC<ConcludeButtonProps> = ({ title, onClick }: ConcludeButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="concludeButton"
      variant="outlined"
      color="primary"
      fullWidth>
      <div className="label-conclude">
        {title}
      </div>
        <KeyboardArrowRight color="secondary" className="iconConcludeButton" />
    </Button>
  );
};
