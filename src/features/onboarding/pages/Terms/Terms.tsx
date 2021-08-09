import React from "react";
import { Box } from "@material-ui/core";
import { AppBar } from "components/AppBar";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { TermsText } from "features/onboarding/components/texts/TermsText";
import { OnboardingRoutes } from "features/onboarding/constants/routes";

import { useStyles } from "./Terms.style";
import { Button } from "components/Button";
import { nextLabel } from "constants/buttons/labels";
import { KeyboardArrowRight } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export const Terms: React.FC = () => {
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const history = useHistory();
  const styles = useStyles();

  const handleTermsAccept = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptedTerms(event.target.checked);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.activateAccount);
  };

  return (
    <ProcessPageLayout
      appBar={<AppBar homeRoute={OnboardingRoutes.welcome} />}
      header={
        <ProcessDescriptionHeader
          title="Bem vindo ao Fitbank"
          subtitle="Termos de uso"
          description="Para usar nossos serviços, você deve estar de acordo com os termos de uso"
        />
      }
      main={
        <Box className={styles.termsWrapper}>
          <TermsText
            valueCheckBox={acceptedTerms}
            termsAcceptCheckBox={handleTermsAccept}
          />
        </Box>
      }
      footer={
        <ProcessPageFooter
          primaryButton={
            <Button
              onClick={onNextButtonClick}
              endIcon={<KeyboardArrowRight color="secondary" />}
            >
              {nextLabel}
            </Button>
          }
        />
      }
      footerPosition="fixed"
    />
  );
};
