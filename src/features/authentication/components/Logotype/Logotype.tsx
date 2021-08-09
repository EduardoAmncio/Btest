import React from "react";
import { Grid } from '@material-ui/core';
import logo from "../../../../_assets/img/logotipo.svg";

import { useStyle } from "./Logotype.style";

export const Logotype: React.FC = () => {

  const style = useStyle();

  return (
    <>
      <Grid color="primary" className={style.mainStyle}>
        <img className={style.logo} src={logo} alt="logo" />
      </Grid>
    </>
  );
};
