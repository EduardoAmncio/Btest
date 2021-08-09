import React from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useStyle } from "./FeatureButton.style";
import { useHistory } from "react-router"
import { PaymentsRoutes } from "features/payment/constants/routes"


interface FeatureButtonProps {
  imagePath: string;
  title: string;
  redirectRoute: string;
}

export const FeatureButton: React.FC<FeatureButtonProps> = ({
  title,
  imagePath,
  redirectRoute,
}: FeatureButtonProps) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(redirectRoute);
  };
  const style = useStyle();

  return (
    <>
      <Button
        className={style.ftButton}
        variant="outlined"
        color="primary"
        onClick={handleOnClick}
        fullWidth
      >
        <div className={style.propButton}>
          <img src={imagePath} className={style.iconFtButton} alt={style.ftButton} />
          <div className={style.label}>{title}</div>
        </div>
      </Button>
    </>
  );
};
