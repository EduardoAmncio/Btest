import React from "react";
import { Box } from "@material-ui/core";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { TransferenceRoutes } from "../../constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { AccountRoutes } from "features/account/constants/routes";
import { useStyles } from "./Transference.style";
import bankTransferIcon from "_assets/icons/BankTransfer.svg";
import { SelectionCard } from "components/SelectionCard";
import { useDispatch } from "react-redux";
import { updateTransferenceData } from "features/transference/redux/actions";
import { TransferType } from "features/transference/redux/models/enum";
import { useHistory } from "react-router-dom";

export const Transference: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  const _updateTransferType = (transferType: TransferType) => {
    dispatch(updateTransferenceData({ transferType }));
    history.push(TransferenceRoutes.favoredIdentification);
  };

  const onInternalTransferClick = () => {
    _updateTransferType(TransferType.InternalTransfer);
  };

  const onMoneyTransferClick = () => {
    _updateTransferType(TransferType.MoneyTransfer);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        header={
          <ProcessDescriptionHeader
            title="Transferência"
            subtitle="Como deseja realizar a transferência?"
            description="Pode ser para uma conta bancária ou por mensagem de texto no celular, mesmo que o beneficiário não tenha conta bancária."
          />
        }
        main={
          <Box className={styles.content}>
            <SelectionCard
              title="Transferir para conta Fitbank"
              subtitle="Identifique por CPF ou busque em seus contatos"
              endIcon={bankTransferIcon}
              onClick={onInternalTransferClick}
            />
            <SelectionCard
              title="Transferir para outros bancos"
              subtitle="Identifique por CPF ou busque em seus contatos"
              endIcon={bankTransferIcon}
              onClick={onMoneyTransferClick}
            />
          </Box>
        }
      />
    </PageContainer>
  );
};
