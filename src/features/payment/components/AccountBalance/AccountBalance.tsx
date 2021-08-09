import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import { StoreState } from "../../../../redux/state";

import { useStyles } from "./AccountBalance.style";
import { CurrencyFormatter, currencySymbol } from "../../../../_translate";

interface AccountBalanceProps {
  show: boolean;
  variant?: Variant;
}

export const AccountBalance: React.FC<AccountBalanceProps> = ({
  show,
  variant = "h6",
}: AccountBalanceProps) => {
  const styles = useStyles();
  const state = useSelector((state: StoreState) => state.account);
  const { loading, dashboard } = state;

  if (loading || !show)
    return <div id="account-balance" className={styles.hiddenContent} />;

  const shownBalance =
    dashboard?.balance !== undefined
      ? CurrencyFormatter.format(dashboard.balance)
      : `${currencySymbol} ---`;

  return (
    <Typography id="account-balance" variant={variant}>
      {shownBalance}
    </Typography>
  );
};
  