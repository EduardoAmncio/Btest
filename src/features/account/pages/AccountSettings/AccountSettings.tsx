import React from "react";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AccountCard } from "features/account/components/AccountCard";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { useStyles } from "./AccountSettings.style";
import { useHistory } from "react-router-dom";
import { AccountRoutes } from "features/account/constants/routes";
import { Box } from "@material-ui/core";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { ActionList } from "components/ActionList";
import { ActionListItem } from "components/ActionListItem";
import { AuthenticationRoutes } from "features/authentication/constants/routes";
import { useSelector } from "react-redux";
import { StoreState } from "redux/state";
import Check from "_assets/icons/Check.svg";

export const AccountSettings: React.FC = () => {
  const account = useSelector((state: StoreState) => state.account.account!);
  const history = useHistory();
  const styles = useStyles();

  const onSeeAllButtonClick = () => {
    history.push(AccountRoutes.allAccounts);
  };

  const onSignOutClick = () => {
    history.replace(AuthenticationRoutes.signOut);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        header={
          <React.Fragment>
            <ProcessDescriptionHeader title="Configurações" />
            <AccountCard
              account={account}
              endIcon={Check}
              className={styles.currentAccount}
            />
          </React.Fragment>
        }
        main={
          <React.Fragment>
            <Box
              display="flex"
              justifyContent="center"
              className={styles.seeAllButton}
            >
              <ButtonWithFloatingIcon onClick={onSeeAllButtonClick}>
                Ver todas
              </ButtonWithFloatingIcon>
            </Box>
            <ActionList>
              <ActionListItem onClick={onSignOutClick}>
                Sair da conta
              </ActionListItem>
            </ActionList>
          </React.Fragment>
        }
        footer={<ProcessPageFooter />}
      />
    </PageContainer>
  );
};
