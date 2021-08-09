import { makeStyles } from "@material-ui/core";
import { colors, textColors } from "_config/theme";

export interface BankCardStyleProps {
  selected?: boolean;
}

export const useStyles = makeStyles({
  bankCard: {
    borderRadius: 0,
    background: ({ selected }: BankCardStyleProps) =>
      selected ? colors.primary.main : "white",

    "& .MuiTypography-root": {
      color: ({ selected }: BankCardStyleProps) =>
        selected ? "white" : textColors.gray,
    },

    "& .MuiListItemText-primary": {
      fontSize: 12,
      fontWeight: 500,
    },
    "& .MuiListItemText-secondary": {
      fontSize: 10,
      fontWeight: 300,
    },
  },
});
