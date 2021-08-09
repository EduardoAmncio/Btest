import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyles = makeStyles({
  voucherContent: {
    width: "100%",
    marginTop: "20px 0",
    flexDirection: "column",
    justifyContent: "center",
    color: textColors.gray,
  },
});
