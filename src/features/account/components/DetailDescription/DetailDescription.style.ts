import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyle = makeStyles({
  detailContent: {
    width: "100%",
    marginBottom: "20px",
    flexDirection: "column",
    justifyContent: "center",
    color: textColors.gray,
  },
  detailAnnex: {
    marginTop: "18px",
  },
});
