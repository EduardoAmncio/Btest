import React from "react";
import { Button } from "@material-ui/core";
import { useStyle } from "./TagButton.style";

interface TagButtonProps {
  label?: string;
  active?: boolean;
  onClick?: VoidFunction;
}

export const TagButton: React.FC<TagButtonProps> = ({
  label,
  active,
  onClick,
  children,
}) => {
  const style = useStyle({ active });
  return (
    <Button className={style.tagButton} variant="contained" onClick={onClick}>
      {label ?? children}
    </Button>
  );
};