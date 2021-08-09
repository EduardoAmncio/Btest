import React from "react";
import { useHistory } from "react-router-dom";
import { PageContainer } from "components/PageContainer";
import { AccountRoutes } from "features/account/constants/routes";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { maskTaxPayer } from "_utils/masks/taxPayer";
import { useMask } from "hooks/useMask";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { TextField } from "components/TextField";
import { TransferenceRoutes } from "features/transference/constants/routes";
import { updateTransferenceData } from "features/transference/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { TransferType } from "features/transference/redux/models/enum";
import { Box } from "@material-ui/core";

export const FavoredIdentification: React.FC = () => {
  const history = useHistory();
  const [taxId, setTaxId] = useMask(maskTaxPayer);
  const transferType = useSelector(
    (state: StoreState) => state.transference.transference?.transferType
  );
  const dispatch = useDispatch();

  const onTaxIdChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTaxId(event.target.value);

  const onCancelButtonClick = () => {
    dispatch(updateTransferenceData());
    history.go(-2);
  };

  const onSubmit = () => {
    dispatch(updateTransferenceData({ toTaxId: taxId }));
    history.push(
      transferType === TransferType.InternalTransfer
        ? TransferenceRoutes.value
        : TransferenceRoutes.favoredName
    );
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
            title="Transferência"
            subtitle="Vamos identificar quem receberá sua transferência"
            description="Informe o CPF, CNPJ ou busque em seus contatos"
          />
        }
        main={
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              label="CPF ou CNPJ"
              placeholder="Digite apenas números"
              inputMode="numeric"
              value={taxId}
              onChange={onTaxIdChange}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                endIcon={<KeyboardArrowRight color="secondary" />}
                disabled={taxId.length !== 14 && taxId.length !== 18}
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
