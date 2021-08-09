import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { PageTitle } from "features/onboarding/components/texts/PageTitle";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { DigitsCardInput } from "features/onboarding/components/inputs/CardDigitsInput";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { OnboardingRoutes } from "features/onboarding/constants/routes";

import { useStyle } from "_assets/makeStyles/container/container.style";
import "_assets/css/forms/mainform.scss";
import "./EnterDigitsForCard.scss";

export const EnterDigitsForCard: React.FC = () => {
  const history = useHistory();
  const style = useStyle();

  const [digitsCardInput, setDigitsCardInput] = React.useState({ digits: "" });

  const onDigitsCardChange = (digits: any) => setDigitsCardInput({ digits });

  const onCancelButtonClick = () => {
    history.replace(OnboardingRoutes.activateAccount);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.enterPhoneCard);
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
              title="Hora de ativar seu cartão"
              description="Para identificarmos seus dados, insira os 4 últimos digitos do número do seu cartão"
            />
          </div>
          <div className="content">
            <div className="align-top">
              <div className="digitsCardAlignInput">
                <DigitsCardInput
                  onChange={onDigitsCardChange}
                  value={digitsCardInput}
                />
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
