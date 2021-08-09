import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { DayTransactions } from "features/account/components/DayTransactions";
import { AccountRoutes } from "features/account/constants/routes";
import { StoreState } from "redux/state";
import { Alert } from "components/Alert";
import { Loader } from "components/Loader";
import { AppBar } from "components/AppBar";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { closeAlert, getBankStatement } from "features/account/redux/actions";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AccountBalance } from "features/account/components/AccountBalance";
import filterIcon from "_assets/icons/icn-filtro.svg";

import { useStyles } from "./BankStatement.style";
import "_assets/css/forms/mainform.scss";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";

export const BankStatement: React.FC = () => {
  const accountState = useSelector((store: StoreState) => store.account);
  const dispatch = useDispatch();
  const history = useHistory();

  const styles = useStyles();

  const { loading, bankStatement, errorMessage } = accountState;
  React.useEffect(() => {
    if (!bankStatement) dispatch(getBankStatement());
  }, [bankStatement, dispatch]);

  const onMoreFiltersButtonClick = () => {
    history.push(AccountRoutes.filter);
  };

  const onAlertClose = () => {
    dispatch(closeAlert());
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        header={
          <React.Fragment>
            <ProcessDescriptionHeader
              title="Extrato"
              description="Acompanhe a movimentação da sua conta com todos os detahes de suas movimentações."
            />
            <Box display="flex" className={styles.balanceSubheader}>
              <Typography>Seu saldo:&nbsp;</Typography>
              <AccountBalance variant="body1" show />
            </Box>
          </React.Fragment>
        }
        main={
          <React.Fragment>
            <Grid container justify="space-between" className={styles.filters}>
              <Grid item>
                <Typography variant="subtitle2">Filtrar por:</Typography>
              </Grid>
              <Grid item>
                <ButtonWithFloatingIcon
                  icon={filterIcon}
                  onClick={onMoreFiltersButtonClick}
                >
                  Mais filtros
                </ButtonWithFloatingIcon>
              </Grid>
            </Grid>
            {bankStatement?.map((dayTransactions, i) => (
              <DayTransactions key={i} dayTransactions={dayTransactions} />
            ))}
          </React.Fragment>
        }
        footer={<ProcessPageFooter />}
      />

      {errorMessage && (
        <Alert
          title="Erro"
          message={errorMessage}
          severity={"error"}
          onClose={onAlertClose}
        />
      )}
      <Loader open={loading} />
    </PageContainer>
  );
};
