import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export interface TagButtonStylesProps {
  active?: boolean;
}

export const useStyle = makeStyles({
  tagButton: {
    height: "15px",
    fontSize: "8px",
    border: "1px solid #323751",
    padding: "2px 8px",
    color: textColors.primary,
    borderRadius: "15px",
    boxShadow: ({ active }: TagButtonStylesProps) =>
      active
        ? "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
        : "initial",
  },
});
