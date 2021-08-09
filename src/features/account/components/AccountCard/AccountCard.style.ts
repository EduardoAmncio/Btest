import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyle = makeStyles({
  accountCard: {
    cursor: "pointer",
    color: textColors.gray,

    "& .MuiGrid-item": {
      display: "flex",
      justifyContent: "center",
    },
  },
  accountData: {
    flexGrow: 1,
  },
  endIcon: {
    "& > *": {
      height: 24,
      width: 24,
    },
  },
});
