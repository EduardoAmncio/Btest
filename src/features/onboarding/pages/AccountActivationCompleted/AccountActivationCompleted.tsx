import React from "react";
import { Container, Typography } from "@material-ui/core";
import { PageTitle } from "features/onboarding/components/texts/PageTitle";
import { AccessAccountButton } from "features/onboarding/components/buttons/AccessAccountButton";
import { ActivateCardButton } from "features/onboarding/components/buttons/ActivateCardButton";

import { useStyle } from "_assets/makeStyles/container/container.style";
import "_assets/css/onboarding/finish-activation.scss";

import "./AccountActivationCompleted.scss";

interface AccountActivationCompletedProps {
  activeTwoButtons: boolean;
}

export const AccountActivationCompleted: React.FC<AccountActivationCompletedProps> = ({
  activeTwoButtons,
}: AccountActivationCompletedProps) => {
  const style = useStyle();
  return (
    <Container maxWidth="xs" className={style.container}>
      <div className="finish-activation">
        <div className="title">
          <PageTitle text="Concluído" />
        </div>
        <div className="image"></div>
        <div className="welcome-message">
          <Typography variant="caption" display="block" gutterBottom>
            Seja Bem vindo, <strong>Fulano!</strong>
          </Typography>
          <Typography
            className="welcomeAlignText"
            variant="caption"
            gutterBottom
          >
            É simplesmente uma simulação de texto da indústria tipográfica e de
            impressos.
          </Typography>
          <div className="accessAccountAlignButton">
            {activeTwoButtons === true && (
              <div className="acessAccountMarginButtons">
                <ActivateCardButton />
              </div>
            )}
            <AccessAccountButton />
          </div>
        </div>
      </div>
    </Container>
  );
};
