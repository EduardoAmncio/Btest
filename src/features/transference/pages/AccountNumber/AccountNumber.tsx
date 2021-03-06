import React from "react";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { AccountRoutes } from "features/account/constants/routes";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { useHistory } from "react-router-dom";
import { TextField } from "components/TextField";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { TransferenceRoutes } from "features/transference/constants/routes";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { useDispatch } from "react-redux";
import { updateTransferenceData } from "features/transference/redux/actions";
import { Box } from "@material-ui/core";

export const AccountNumber: React.FC = () => {
  const [accountNumber, setAccountNumber] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const _splitAccountNumberFromDigit = (): [string, string] => {
    return [
      accountNumber.substring(0, accountNumber.length - 1),
      Array.from(accountNumber).pop()!,
    ];
  };

  const onAccountNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccountNumber(event.target.value);
  };

  const onCancelButtonClick = () => {
    dispatch(updateTransferenceData());
    history.go(-7);
  };

  const onSubmit = () => {
    const [bankAccount, bankAccountDigit] = _splitAccountNumberFromDigit();
    if (accountNumber.length >= 5) {
      dispatch(updateTransferenceData({ bankAccount, bankAccountDigit }));
      history.push(TransferenceRoutes.value);
    }
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={
          <AppBar
            homeRoute={AccountRoutes.home}
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
            title="Transfer??ncia"
            subtitle="Qual o n??mero da conta"
            description="Informe o n??mero completo da conta, incluindo o d??gito"
          />
        }
        main={
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              label="Conta"
              placeholder="Digite apenas n??meros"
              value={accountNumber}
              inputMode={"numeric"}
              onChange={onAccountNumberChange}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                endIcon={<KeyboardArrowRight color="secondary" />}
                disabled={accountNumber.length < 5}
                onClick={onSubmit}
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
