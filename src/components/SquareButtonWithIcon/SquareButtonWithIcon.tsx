import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useStyle } from "./SquareButtonWithIcon.style";

interface SquareButtonWithIconProps {
  icon: string;
  label: string;
  onClick: VoidFunction;
}

export const SquareButtonWithIcon: React.FC<SquareButtonWithIconProps> = ({
  label,
  icon,
  onClick,
}) => {
  const style = useStyle();

  return (
    <Button className={style.button} onClick={onClick}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={icon} className={style.icon} alt={label} />
        <Typography className={style.label}>{label}</Typography>
      </Box>
    </Button>
  );
};
