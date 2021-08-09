import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  hiddenContent: {
    height: 32,
    width: 128,
    borderRadius: 4,
    background: `linear-gradient(${colors.secondary}, ${colors.primary.opacity})`,
  },
});
