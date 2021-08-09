import React from "react";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { TransferenceRoutes } from "../../constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { PageContainer } from "components/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { useHistory } from "react-router-dom";
import { updateTransferenceData } from "features/transference/redux/actions";
import { TextField } from "components/TextField";
import { TransferType } from "features/transference/redux/models/enum";
import { Box } from "@material-ui/core";

export const TransferDescription: React.FC = () => {
  const [description, setDescription] = React.useState("");
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const transferType = useSelector(
    (store: StoreState) => store.transference.transference?.transferType
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(event.target.value);

  const onEditTagsButtonClick = () => {
    setOpenDrawer(true);
  };

  const onCancelButtonClick = () => {
    dispatch(updateTransferenceData());
    history.go(transferType === TransferType.InternalTransfer ? -5 : -11);
  };

  const onSubmit = () => {
    history.push(TransferenceRoutes.summary);
    dispatch(
      updateTransferenceData({
        description: description,
        tags: [],
      })
    );
  };

  const onEditTagsClose = () => {
    setOpenDrawer(false);
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
            subtitle="Deseja identificar sua transferência no extrato?"
            description="Adicione uma descrição, arquivo, foto ou mesmo um video para identificar melhor essa transferência em seu histórico."
          />
        }
        main={
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              label="Descreva em uma frase"
              placeholder="Escreva sua frase"
              value={description}
              onChange={onDescriptionChange}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
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
