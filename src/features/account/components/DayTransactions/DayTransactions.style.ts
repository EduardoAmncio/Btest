import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyle = makeStyles({
  transactionsContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  transactionDay: {
    width: "35px",
    border: "1px solid #ddd",
    borderRight: "none",
    marginRight: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "initial",
  },
  transactionDate: {
    top: "0px",
    textAlign: "center",
    color: textColors.gray,
  },
  transactionsHistory: {
    width: "100%",
  },
  balanceCurrent: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: -20,
    marginBottom: 24,
    fontSize: "10px",
    color: textColors.primary,
  },
});
