import { makeStyles } from "@material-ui/core";
import { theme } from "_config/theme";
import welcomeBackground from "_assets/img/loginBackground.svg";

export const useOnboardingStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "flex-end",

    backgroundImage: `url(${welcomeBackground})`,
    backgroundColor: "#323751",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",

    [theme.breakpoints.up("md")]: {
      padding: "0 64px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 48px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 32px !important",
    },
  },
  content: {
    marginBottom: window.screen.height / 5,
    margin: "24px 24px",
  },
  title: {
    marginBottom: 96,
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 32,
    },
  },
  buttonsSection: {
    display: "flex",
  },
  signInButtonWrapper: {
    margin: "0 32px",
    [theme.breakpoints.down("xs")]: {
      margin: "0 16px",
    },
  },
  onboardingButtonWrapper: {
    borderWidth: 2,
    fontWeight: 900,
    "&:hover": {
      borderWidth: 2,
    },
  },
  logo: {
    padding: "24px 0",
  },
  KnowMoreDescription: {
    color: "white",
    marginTop: "50px",
  }
});
