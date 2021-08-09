import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 0,
  },
  text: {
    color: textColors.gray,
    paddingRight: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: 500,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 400,
    marginTop: 4,

    "& > *": {
      fontSize: 12,
      fontWeight: 400,
    },
  },
});
