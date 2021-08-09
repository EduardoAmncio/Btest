import React from "react";
import { Box, CardContent, Grid, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { SettingsButton } from "features/account/components/SettingsButton";
// import { FeatureButton } from "components/FeatureButton";
import { FeatureButton} from "features/account/components/FeatureButton";
import { ShowBalanceButton } from "features/account/components/ShowBalanceButton";
import { AccountBalance } from "features/account/components/AccountBalance";
import { StoreState } from "redux/state";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";

import logo from "_assets/img/logo.svg";

import BankStatementIcon from "_assets/icons/BankStatement.svg";
import TransferIcon from "_assets/icons/Transfer.svg";
import PaymentIcon from "_assets/icons/Payment.svg";
import PixIcon from "_assets/icons/Pix.svg";

import { useStyle } from "./HomePageHeader.style";
import { useHistory } from "react-router";
import { AccountRoutes } from "features/account/constants/routes";
import { PaymentsRoutes } from "features/payment/constants/routes";

export const HomePageHeader: React.FC = () => {
  const [showBalance, setShowBalance] = React.useState(true);
  const accountName = useSelector(
    (store: StoreState) => store.account.account?.name
  );

  const history = useHistory();
  const style = useStyle();

  const onShowBalanceButtonClick = () => setShowBalance(!showBalance);

  const onShowBankStatementButtonClick = () =>
    history.push(AccountRoutes.bankStatement);


  return (
    <Box className={style.mainHeader}>
      <CardContent>
        <Toolbar className={style.toolbar}>
          <img src={logo} alt="logo" id="logo" />
          <SettingsButton />
        </Toolbar>
        <Box className={style.greetingsSection}>
          <Typography>{`Olá ${accountName ?? ""}`}</Typography>
        </Box>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Grid item>
              <Typography variant="body2">Seu saldo</Typography>
            </Grid>
            <Grid item>
              <AccountBalance show={showBalance} />
            </Grid>
          </Grid>
          <Grid item>
            <ShowBalanceButton
              showBalance={showBalance}
              onClick={onShowBalanceButtonClick}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Box>
      <Box className={style.featuresBar}>
          <Grid>
            <FeatureButton imagePath = { TransferIcon } title="Transferencia" redirectRoute={""} />

            <FeatureButton 
            imagePath = { PaymentIcon } 
            title="Pagamento" 
            redirectRoute={PaymentsRoutes.BarCodePayment}
            />

            <FeatureButton imagePath = { PixIcon } title="Pix" redirectRoute={""} />
          </Grid>
        </Box>
        <Box className={style.bottomFloatingButton}>
          <ButtonWithFloatingIcon
            icon={BankStatementIcon}
            onClick={onShowBankStatementButtonClick}
          >
            Ver extrato
          </ButtonWithFloatingIcon>
        </Box>
      </Box>
    </Box>
  );
};
