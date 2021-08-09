import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import { useStyle } from "./AccountCard.style";
import { Account } from "features/account/redux/models/account";
import image from "_assets/img/imageUserMas.svg";

interface AccountCardProps {
  account: Account;
  endIcon?: string | React.ReactNode;
  onClick?: VoidFunction;
  className?: string;
}

export const AccountCard: React.FC<AccountCardProps> = ({
  account,
  endIcon,
  onClick,
  className,
}) => {
  const styles = useStyle();
  const effectiveCardClassName = `${styles.accountCard} ${className ?? ""}`;

  return (
    <Card className={effectiveCardClassName} elevation={0} onClick={onClick}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <img src={image} alt="accountImage" />
        </Grid>
        <Grid item className={styles.accountData}>
          <Grid container direction="column">
            <Typography variant="body2">
              <strong>{account!.name}</strong>
            </Typography>
          </Grid>
        </Grid>
        {endIcon && (
          <Grid item className={styles.endIcon}>
            {typeof endIcon === "string" ? (
              <img src={endIcon} alt="accountState" />
            ) : (
              endIcon
            )}
          </Grid>
        )}
      </Grid>
    </Card>
  );
};
