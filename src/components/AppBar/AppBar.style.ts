import { makeStyles } from "@material-ui/core";
import { theme } from "_config/theme";

const toolbarHeight = 48;

export const useStyles = makeStyles({
  appheader: {
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: toolbarHeight,

    [theme.breakpoints.down("sm")]: {
      height: toolbarHeight,
    },
  },
  cancelButton: {
    marginLeft: "16px",
  },
  logo: {
    height: "100%",
    borderRadius: "0px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "& img": {
      height: 24,
    },
  },
});
