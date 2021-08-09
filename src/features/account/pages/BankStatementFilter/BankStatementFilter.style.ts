import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyles = makeStyles({
  grayFilterBand: {
    backgroundColor: "#F9F9F9",
  },
  titleAndDescription: {
    marginBottom: 16,
  },
  mainContent: {
    padding: 16,
  },
  datesSection: {
    "& .MuiTypography-root": {
      color: textColors.gray,
      fontSize: 12,
      fontWeight: 500,
    },
  },
  applyButton: {
    display: "flex",
    justifyContent: "center",
  },
  clearButton: {
    display: "flex",
    marginTop: "16px",
    justifyContent: "flex-end",
  },
  customTagButtonsFilter: {
    display: "flex",
    justifyContent: "space-between",
  },
  textAndDate: {
    display: "flex",
    width: "100%",
    color: textColors.gray,
  },
  textFilterDate: {
    marginTop: "5px",
    marginRight: "10px",
    marginLeft: "10px",
  },
  textFilterDateDay: {
    marginTop: "5px",
    marginRight: "6px",
  },
});
