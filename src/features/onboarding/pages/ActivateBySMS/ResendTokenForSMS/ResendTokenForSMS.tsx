import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { PageTitle } from "features/onboarding/components/texts/PageTitle";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { TokenInput } from "features/onboarding/components/inputs/TokenInput";
import { BadgeButton } from "components/BadgeButton";
import IconBgButton from "_assets/icons/buttonBg.png";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { OnboardingRoutes } from "features/onboarding/constants/routes";

import { useStyle } from "_assets/makeStyles/container/container.style";
import "_assets/css/forms/mainform.scss";
import "./ResendTokenForSMS.scss";

interface ResendTokenProsps {
  tokenRoute: string;
}

export const ResendToken: React.FC<ResendTokenProsps> = ({
  tokenRoute,
}: ResendTokenProsps) => {
  const history = useHistory();
  const style = useStyle();

  const [tokenInput, setTokenInput] = React.useState("");

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
              title="Código de Validação"
              description="Informe o Token que você recebeu por SMS para continuar o cadastro."
            />
          </div>
          <div className="content">
            <div className="align-top">
              <div className="tokenAlignInput">
                <TokenInput onChange={setTokenInput} value={tokenInput} />
              </div>
              <div className="bgAlignButton">
                <BadgeButton
                  title={"Reenviar Token"}
                  imagePath={IconBgButton}
                  redirectRoute={tokenRoute}
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
