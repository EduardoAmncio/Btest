import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyle = makeStyles({
  voucherContent: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    color: textColors.gray,
  },
});
