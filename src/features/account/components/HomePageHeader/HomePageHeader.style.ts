import { makeStyles } from "@material-ui/core";
import { theme } from "_config/theme";

const borderRadius = 12;

export const useStyle = makeStyles({
  mainHeader: {
    position: "relative",
    width: "100%",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
    overflow: "visible",
  },
  greetingsSection: {
    marginBottom: 16,

    "& .MuiTypography-root": {
      fontSize: 18,
      fontWeight: 700,
    },
  },
  bottomFloatingButton: {
    position: "absolute",
    left: 25,
    bottom: 110,
  },
  toolbar: {
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& #logo": {
      height: 24,
    },
  },
  featuresBar: {
    position: "relative",
    width: "100%",
    color: theme.palette.primary.main,
    backgroundColor: "white",
    borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
    overflow: "visible",
  }
});
