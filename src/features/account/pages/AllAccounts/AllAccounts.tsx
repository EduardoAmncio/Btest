import React from "react";
import { PageContainer } from "components/PageContainer";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AccountCard } from "features/account/components/AccountCard";
import { useStyles } from "./AllAccounts.style";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { Divider } from "components/Divider";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import Check from "_assets/icons/Check.svg";

export const AllAccounts: React.FC = () => {
  const { loading, dashboard, account, errorMessage } = useSelector(
    (state: StoreState) => state.account
  );
  const style = useStyles();
  const { accounts } = dashboard!;

  const onAccountClick = (accountId: number) => {};

  return (
    <PageContainer>
      <ProcessPageLayout
        header={
          <React.Fragment>
            <ProcessDescriptionHeader title={"Todas as Contas"} />
            <AccountCard
              account={account!}
              endIcon={Check}
              className={style.currentAccount}
            />
          </React.Fragment>
        }
        main={
          <React.Fragment>
            {accounts.map((x, index) => {
              const accountComponent = (
                <AccountCard
                  key={x.name}
                  account={x}
                  endIcon={
                    account?.accountId === x.accountId ? Check : undefined
                  }
                  onClick={() => onAccountClick(x.accountId)}
                />
              );
              if (index < accounts.length - 1)
                return (
                  <React.Fragment>
                    {accountComponent}
                    <Divider spacing={1} />
                  </React.Fragment>
                );

              return accountComponent;
            })}
          </React.Fragment>
        }
        footer={<ProcessPageFooter />}
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert title="Erro" message={errorMessage} severity="error" />
      )}
    </PageContainer>
  );
};
