import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { useMask } from "hooks/useMask";

import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { cancelLabel, nextLabel } from "constants/buttons/labels";

import { PageTitle } from "features/onboarding/components/texts/PageTitle";

import { maskCpf } from "_utils/masks/taxPayer";
import { useStyle } from "_assets/makeStyles/container/container.style";

import "_assets/css/forms/mainform.scss";

interface EnterTaxPayerProps {}

export const EnterTaxPayer: React.FC<EnterTaxPayerProps> = () => {

  const history = useHistory();

  const style = useStyle();
  const [cpfInput, setCpfInput] = useMask(maskCpf);

  const onCpfChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCpfInput(event.target.value);

  const onCancelButtonClick = () => {
    history.replace(OnboardingRoutes.activateAccount);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.createPasswordForCard);
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
              title="Olá Fulano"
              description="Agora precisamos confirmar seu CPF"
            />
          </div>
          <div className="content">
            <div className="align-top">
              <TextField
                label="CPF ou CNPJ"
                placeholder="Digite apenas números"
                value={cpfInput}
                onChange={onCpfChange}
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