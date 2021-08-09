export enum OnboardingRoutes {
  welcome = "/",
  terms = "/terms",

  activateAccount = "/onboarding/activate-account",

  resendTokenForSMS = "/onboarding/activate-account/sms/resend-token",
  enterTaxPayerForSMS = "/onboarding/activate-account/sms/enter-taxpayer",
  createPasswordForSMS = "/onboarding/activate-account/sms/create-password",
  confirmPasswordForSMS = "/onboarding/activate-account/sms/confirm-password",
  accountActivationCompletedForSMS = "/onboarding/activate-account/sms/account-activated",

  resendTokenForCard = "/onboarding/activate-account/card/send-token",
  enterIDCard = "/onboarding/activate-account/card/enter-id",
  enterDigitsCard = "/onboarding/activate-account/card/enter-digits",
  enterTaxPayerForCard = "/onboarding/activate-account/card/enter-taxpayer",
  enterPhoneCard = "/onboarding/activate-account/card/enter-phone",
  enterTokenForCard = "/onboarding/activate-account/card/enter-token",
  createPasswordForCard = "/onboarding/activate-account/card/create-password",
  confirmPasswordForCard = "/onboarding/activate-account/card/confirm-password",
  accountActivationCompletedForCard = "/onboarding/activate-account/card/account-activated",
}
