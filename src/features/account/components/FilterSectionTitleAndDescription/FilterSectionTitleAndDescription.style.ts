import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyles = makeStyles({
  wrapper: {
    marginBottom: 8,
  },
  title: {
    fontSize: "12px",
    color: textColors.gray,
  },
  description: {
    fontSize: "11px",
    lineHeight: "14px",
    color: textColors.gray,
  },
});
