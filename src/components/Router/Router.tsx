import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "components/ProtectedRoute";
import { SignIn } from "features/authentication/pages/SignIn";
import { Welcome } from "features/onboarding/pages/Welcome";
import { Terms } from "features/onboarding/pages/Terms";
import { ActivateAccount } from "features/onboarding/pages/ActivateAccount";
import { AccountActivationCompleted } from "features/onboarding/pages/AccountActivationCompleted";
import { CreatePassword } from "features/onboarding/pages/ActivateBySMS/CreatePasswordForSMS";
import { ConfirmPassword } from "features/onboarding/pages/ActivateBySMS/ConfirmPasswordForSMS";
import { ResendToken } from "features/onboarding/pages/ActivateBySMS/ResendTokenForSMS";
import { EnterTaxPayer } from "features/onboarding/pages/ActivateBySMS/EnterTaxPayerForSMS";
import { EnterTaxPayerForCard } from "features/onboarding/pages/ActivateByCard/EnterTaxPayerForCard";
import { EnterIDForCard } from "features/onboarding/pages/ActivateByCard/EnterIDForCard";
import { EnterDigitsForCard } from "features/onboarding/pages/ActivateByCard/EnterDigitsForCard";
import { EnterPhoneForCard } from "features/onboarding/pages/ActivateByCard/EnterPhoneForCard";
import { EnterTokenForCard } from "features/onboarding/pages/ActivateByCard/EnterTokenForCard";
import { CreatePasswordForCard } from "features/onboarding/pages/ActivateByCard/CreatePasswordForCard";
import { ConfirmPasswordForCard } from "features/onboarding/pages/ActivateByCard/ConfirmPasswordForCard";
import { BankStatement } from "features/account/pages/BankStatement";
import { Home } from "features/account/pages/Home";
import { AllAccounts } from "features/account/pages/AllAccounts";
import { SignOut } from "features/authentication/pages/SignOut";
import { AccountSettings } from "features/account/pages/AccountSettings";
import { BankStatementFilter } from "features/account/pages/BankStatementFilter";
import { Details } from "features/account/pages/Details";
import { Receipt } from "features/account/pages/Receipt";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { AuthenticationRoutes } from "features/authentication/constants/routes";
import { AccountRoutes } from "features/account/constants/routes";
import { AttachDocuments } from "features/transference/pages/AttachDocuments";
import { CompletedTransfer } from "features/transference/pages/CompletedTransfer";
import { FavoredAccountSelection } from "features/transference/pages/FavoredAccountSelection";
import { ScheduleTransfer } from "features/transference/pages/ScheduleTransfer";
import { Summary } from "features/transference/pages/Summary/Summary";
import { TransferDescription } from "features/transference/pages/TransferDescription";
import { Transference } from "features/transference/pages/Transference/Transference";
import { TransferReceipt } from "features/transference/pages/TransferReceipt/";
import { TransferValue } from "features/transference/pages/TransferValue";
import { TransferenceRoutes } from "features/transference/constants/routes";
import { FavoredIdentification } from "features/transference/pages/FavoredIdentification";
import { FavoredName } from "features/transference/pages/FavoredName";
import { SelectBank } from "features/transference/pages/SelectBank";
import { SelectAccountType } from "features/transference/pages/SelectAccountType";
import { BankBranch } from "features/transference/pages/BankBranch";
import { AccountNumber } from "features/transference/pages/AccountNumber";
import { PaymentsRoutes } from "features/payment/constants/routes";
import { BarCodeScanner } from "features/payment/pages/BarCodeScanner";
import { BarCodePayment } from "features/payment/pages/BarCodePayment";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={OnboardingRoutes.welcome} component={Welcome} />
        <Route path={OnboardingRoutes.terms} component={Terms} />

        <Route
          exact
          path={OnboardingRoutes.activateAccount}
          component={ActivateAccount}
        />
        <Route
          path={OnboardingRoutes.resendTokenForSMS}
          component={ResendToken}
        />
        <Route
          path={OnboardingRoutes.enterTaxPayerForSMS}
          component={EnterTaxPayer}
        />
        <Route
          path={OnboardingRoutes.createPasswordForSMS}
          component={CreatePassword}
        />
        <Route
          path={OnboardingRoutes.confirmPasswordForSMS}
          component={ConfirmPassword}
        />
        <Route
          path={OnboardingRoutes.accountActivationCompletedForSMS}
          component={AccountActivationCompleted}
        />

        <Route
          path={OnboardingRoutes.enterTaxPayerForCard}
          component={EnterTaxPayerForCard}
        />
        <Route path={OnboardingRoutes.enterIDCard} component={EnterIDForCard} />
        <Route
          path={OnboardingRoutes.enterDigitsCard}
          component={EnterDigitsForCard}
        />
        <Route
          path={OnboardingRoutes.enterPhoneCard}
          component={EnterPhoneForCard}
        />
        <Route
          path={OnboardingRoutes.enterTokenForCard}
          component={EnterTokenForCard}
        />
        <Route
          path={OnboardingRoutes.createPasswordForCard}
          component={CreatePasswordForCard}
        />
        <Route
          path={OnboardingRoutes.confirmPasswordForCard}
          component={ConfirmPasswordForCard}
        />

        <Route path={OnboardingRoutes.accountActivationCompletedForCard}>
          <AccountActivationCompleted activeTwoButtons={true} />
        </Route>
        <Route path={AuthenticationRoutes.signIn} component={SignIn} />
        <ProtectedRoute
          path={AuthenticationRoutes.signOut}
          component={SignOut}
        />

        <ProtectedRoute
          exact
          path={AccountRoutes.filter}
          component={BankStatementFilter}
        />
        <ProtectedRoute exact path={AccountRoutes.detail} component={Details} />
        <ProtectedRoute
          exact
          path={AccountRoutes.bankStatement}
          component={BankStatement}
        />
        <ProtectedRoute
          exact
          path={AccountRoutes.settings}
          component={AccountSettings}
        />
        <Route
          exact
          path={PaymentsRoutes.BarCodeScanner}
          component={BarCodeScanner}
        />
        <ProtectedRoute
          exact
          path={AccountRoutes.allAccounts}
          component={AllAccounts}
        />
        <ProtectedRoute
          exact
          path={AccountRoutes.receipt}
          component={Receipt}
        />
        <Route
        exact
        path={PaymentsRoutes.BarCodePayment}
        component={BarCodePayment}
        />
        <ProtectedRoute exact path={AccountRoutes.home} component={Home} />

        <ProtectedRoute
          exact
          path={TransferenceRoutes.favoredIdentification}
          component={FavoredIdentification}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.favoredName}
          component={FavoredName}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.selectBank}
          component={SelectBank}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.selectAccountType}
          component={SelectAccountType}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.bankBranch}
          component={BankBranch}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.accountNumber}
          component={AccountNumber}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.attachDocuments}
          component={AttachDocuments}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.completed}
          component={CompletedTransfer}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.favoredAccountSelection}
          component={FavoredAccountSelection}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.schedule}
          component={ScheduleTransfer}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.summary}
          component={Summary}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.description}
          component={TransferDescription}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.voucherTransfer}
          component={TransferReceipt}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.value}
          component={TransferValue}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.transference}
          component={Transference}
        />
      </Switch>
    </BrowserRouter>
  );
};
