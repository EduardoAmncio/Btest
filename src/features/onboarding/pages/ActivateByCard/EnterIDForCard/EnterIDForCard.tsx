import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { PageTitle } from "features/onboarding/components/texts/PageTitle";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { useMask } from "hooks/useMask";
import { maskIdCard } from "_utils/masks/idCard";
import { useStyle } from "_assets/makeStyles/container/container.style";
import { QRCodeButton } from "features/onboarding/components/buttons/QRCodeButton";
import IconBgButton from "_assets/icons/buttonBg.png";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { OnboardingRoutes } from "features/onboarding/constants/routes";

import "_assets/css/forms/mainform.scss";
import "./EnterIDForCard.scss";

export const EnterIDForCard: React.FC = () => {
  const history = useHistory();
  const style = useStyle();

  const [idInput, setIdInput] = useMask(maskIdCard);

  const onIdChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIdInput(event.target.value);

  const onCancelButtonClick = () => {
    history.replace(OnboardingRoutes.activateAccount);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.enterDigitsCard);
  };

  return (
    <Container maxWidth="xs" className={style.container}>
      <div className="main-form">
        <AppBar
          homeRoute={OnboardingRoutes.welcome}
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
        <div className="form-body">
          <div className="top">
            <PageTitle text="Ative sua Conta" />
            <ProcessDescriptionHeader
              title="Identificar seu cartão"
              description="Insira o código de identificação de 9 dígitos impresso em seu cartão."
            />
          </div>
          <div className="content">
            <div className="align-top">
              <TextField
                label="Insira o ID CARD de 9 dígitos"
                placeholder="XXXXXXXXX"
                value={idInput}
                onChange={onIdChange}
              />
              <div className="bgAlignButton">
                <QRCodeButton title="Ler QR Code" imagePath={IconBgButton} />
              </div>
            </div>
          </div>
        </div>
        <ProcessPageFooter
          primaryButton={
            <Button
              endIcon={<KeyboardArrowRight color="secondary" />}
              onClick={onNextButtonClick}
            >
              {nextLabel}
            </Button>
          }
        />
      </div>
    </Container>
  );
};
