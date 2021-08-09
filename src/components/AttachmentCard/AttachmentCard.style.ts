import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyles = makeStyles({
  attatchmentButton: {
    width: "100%",
    maxWidth: 136,
    height: 48,
    marginRight: 105,
    backgroundColor: "#F0F0F0",
    boxShadow: "2px 2px 2px rgba(26, 26, 26, 0.35)",
    borderColor: "#E8E8E8",
  },
  propButton: {
    fontSize: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  attachmentButtonIcon: {
    display: "absolute",
    width: 10,
    marginRight: 15,
    marginTop: 5,
  },
  attatchmentInfoLabel: {
    textTransform: "capitalize",
    lineHeight: 15,
    fontSize: 12,
    color: textColors.gray,
    marginRight: 30,
    width: 15,
    paddingRight: 50,
    marginLeft: -5,
  },
  attachmentDetailInfo: {
    marginRight: 35,
    fontWeight: 300,
  },
});
