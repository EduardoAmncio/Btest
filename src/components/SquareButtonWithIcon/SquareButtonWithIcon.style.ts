import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyle = makeStyles({
  button: {
    width: "88px",
    height: "80px",
    display: "flex",
    padding: "4px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  icon: {
    display: "absolute",
    height: "44px",
    marginRight: "10px",
    marginLeft: "10px",
  },
  label: {
    fontSize: "10px",
    color: textColors.primary,
    textTransform: "none",
  },
});
