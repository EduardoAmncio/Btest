import React from "react";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";
import { OnboardingTitle } from "features/onboarding/components/texts/OnboardingTitle";
import { KnowMoreDescription } from "features/onboarding/components/texts/KnowMoreDescription"
import { WelcomePageButton } from "features/onboarding/components/buttons/WelcomePageButton";
import { AuthenticationRoutes } from "features/authentication/constants/routes";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { AccountRoutes } from "features/account/constants/routes";
import { useOnboardingStyles } from "./Welcome.style";
import { useToken } from "hooks/useToken";
import { ActivateAccountButton } from "features/onboarding/components/buttons/ActivateAccountButton";
import { Logo } from "components/Logo"
import { PageContainer } from "components/PageContainer";

export const Welcome: React.FC = () => {
  const styles = useOnboardingStyles();
  const history = useHistory();
  const token = useToken();

  React.useEffect(() => {
    if (token) history.replace(AccountRoutes.home);
  }, [history, token]);

  return (
    <PageContainer className={styles.container}>
      <Grid container direction="column" className={styles.content}>
        <Grid item className={styles.logo}>
          <Logo></Logo>
        </Grid>
        <Grid item className={styles.title}>
          <OnboardingTitle />
        </Grid>
        <Grid
          item
          container
          direction="column"
          spacing={4}
          className={styles.buttonsSection}
        >
          {/* <Grid item className={styles.onboardingButtonWrapper}>
            <ActivateAccountButton
              size="large"
              route={OnboardingRoutes.terms}
              palette="white"
              borderWidth={2}
            >
              Ativar minha conta
            </ActivateAccountButton>
          </Grid> */}
          <Grid item className={styles.signInButtonWrapper}>
            <WelcomePageButton
              route={AuthenticationRoutes.signIn}
              palette="white"
            >
              Entrar na minha conta
            </WelcomePageButton>
          </Grid>
        </Grid>
        {/* <Grid item className={styles.KnowMoreDescription}>
          <KnowMoreDescription />
        </Grid> */}
      </Grid>
    </PageContainer>
  );
};
