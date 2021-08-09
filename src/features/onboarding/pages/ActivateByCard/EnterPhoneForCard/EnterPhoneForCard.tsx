import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { PageTitle } from "features/onboarding/components/texts/PageTitle";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { useMask } from "hooks/useMask";
import { maskPhone } from "_utils/masks/phone";
import { useStyle } from "_assets/makeStyles/container/container.style";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { OnboardingRoutes } from "features/onboarding/constants/routes";

import "_assets/css/forms/mainform.scss";
import "./EnterPhoneForCard.scss";

export const EnterPhoneForCard: React.FC = () => {
  const history = useHistory();
  const style = useStyle();

  const [phoneInput, setPhoneInput] = useMask(maskPhone);

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPhoneInput(event.target.value);

  const onCancelButtonClick = () => {
    history.replace(OnboardingRoutes.activateAccount);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.enterTokenForCard);
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
            <PageTitle text="Ativar Conta" />
            <ProcessDescriptionHeader
              title="Informe o número de celular cadastrado"
              description="Você receberá, por mensagem de texto, um código de validação de seu acesso"
            />
          </div>
          <div className="content">
            <div className="align-top">
              <TextField
                multiline
                rows="1"
                label="Celular com DDD"
                placeholder="(XX) X XXXX.XXXX"
                value={phoneInput}
                onChange={onPhoneChange}
              />
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
