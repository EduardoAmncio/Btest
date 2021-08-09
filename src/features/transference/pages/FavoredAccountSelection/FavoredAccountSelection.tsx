import React from "react";
import { Box } from "@material-ui/core";
import { AccountRoutes } from "features/account/constants/routes";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import Next from "_assets/icons/Next.svg";
import IconBgButton from "_assets/icons/buttonBg.png";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { Close } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { cancelLabel } from "constants/buttons/labels";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { SelectionCard } from "components/SelectionCard";
import { useStyles } from "./FavoredAccountSelection.style";
import { TransferenceRoutes } from "features/transference/constants/routes";
import { useDispatch } from "react-redux";
import { updateTransferenceData } from "features/transference/redux/actions";

export const FavoredAccountSelection: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  const onCancelButtonClick = () => {
    dispatch(updateTransferenceData());
    history.replace(TransferenceRoutes.transference);
  };

  const onAccountCardClick = () => {
    history.push(TransferenceRoutes.value);
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
            subtitle="Vimos que o Pedro Victor já tem uma conta com a gente"
            description="Deseja enviar para essa conta ou de outro banco?"
          />
        }
        main={
          <Box className={styles.content}>
            <SelectionCard
              title="Pedro Victor Silva"
              subtitle="Conta 2532-2 Bank"
              endIcon={Next}
              onClick={onAccountCardClick}
            />
            <Box mt={8} display="flex" justifyContent="center">
              <ButtonWithFloatingIcon
                icon={IconBgButton}
                className={styles.otherAccountButton}
              >
                Outra conta
              </ButtonWithFloatingIcon>
            </Box>
          </Box>
        }
        footer={<ProcessPageFooter />}
      />
    </PageContainer>
  );
};
