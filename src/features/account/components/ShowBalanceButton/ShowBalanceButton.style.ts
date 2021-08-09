import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyle = makeStyles({
  showBalanceButton: {
    fontSize: "10px",
    lineHeight: "95.19%",
    textTransform: "none",
    color: "#E8E8E8",
    border: `1px solid ${colors.background}`,
    width: "95px",

    "&:hover": {
      backgroundColor: "primary",
      border: "1px solid white",
    },

    "& img": {
      marginRight: 8,
    },

    "& .MuiButton-label": {
      textAlign: "left",
    },
  },
});
