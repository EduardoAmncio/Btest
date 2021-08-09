import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { AppBar } from "components/AppBar";
import { TransferenceRoutes } from "../../constants/routes";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { PageContainer } from "components/PageContainer";
import { TextField } from "components/TextField";
import { useHistory } from "react-router-dom";
import { CurrencyFormatter, currencySymbol } from "_translate";
import { updateTransferenceData } from "features/transference/redux/actions";
import { TransferType } from "features/transference/redux/models/enum";

export const TransferValue: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { balance, transferType } = useSelector((store: StoreState) => ({
    balance: store.account.dashboard!.balance,
    transferType: store.transference.transference?.transferType,
  }));
  const dispatch = useDispatch();
  const history = useHistory();

  const _isValidValue = () => value > 0 && value <= balance;

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value ?? 0));
  };

  const onCancelButtonClick = () => {
    dispatch(updateTransferenceData());
    history.go(transferType === TransferType.InternalTransfer ? -3 : -8);
  };

  const onSubmit = () => {
    if (_isValidValue()) {
      history.push(TransferenceRoutes.schedule);
      dispatch(updateTransferenceData({ transferValue: value }));
    }
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={
          <AppBar
            homeRoute={TransferenceRoutes.transference}
            action={
              <Button
                palette="secondary"
                size="small"
                startIcon={<Close color="primary" />}
                onClick={onCancelButtonClick}
              >
                {cancelLabel}
              </Button>
            }
          />
        }
        header={
          <ProcessDescriptionHeader
            title="Transferência"
            subtitle="Quanto deseja transferir?"
            description="Você está transferindo para conta de Pedro
                          Victor da Silva NESTE BANCO"
          />
        }
        main={
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography>
                <strong>Seu saldo {CurrencyFormatter.format(balance)}</strong>
              </Typography>
            </Grid>
            <Grid item component="form" onSubmit={onSubmit}>
              <TextField
                label="Valor"
                type="number"
                startAdornment={<Box>{currencySymbol}&nbsp;</Box>}
                value={value.toString()}
                minValue={0}
                maxValue={balance}
                onChange={onValueChange}
                placeholder={"0"}
              />
            </Grid>
          </Grid>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onSubmit}
                disabled={!_isValidValue()}
              >
                {nextLabel}
              </Button>
            }
          />
        }
      />
    </PageContainer>
  );
};
