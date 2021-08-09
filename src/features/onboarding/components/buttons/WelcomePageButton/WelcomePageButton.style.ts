import { makeStyles } from "@material-ui/core";
import { theme } from "_config/theme";

export interface StylesProps {
  borderWidth?: 1 | 2;
  size?: "large" | "normal";
  palette?: "primary" | "white";
}

export const useStyles = makeStyles({
  button: {
    textTransform: "none",
    borderStyle: "solid",

    height: ({ size }: StylesProps) => (size === "large" ? 48 : 38),
    fontSize: ({ size }: StylesProps) =>
      size === "large" ? "1.25rem" : "0.75rem",
    backgroundColor: ({ palette }: StylesProps) =>
      palette === "primary" ? theme.palette.primary.main : "white",
    borderColor: ({ palette }: StylesProps) =>
      palette === "primary" ? "white" : theme.palette.primary.main,
    borderWidth: ({ borderWidth }: StylesProps) => borderWidth ?? 1,

    color: ({ palette }: StylesProps) =>
      palette === "primary" ? "white" : theme.palette.primary.main,

    "&:hover": {
      backgroundColor: ({ palette }: StylesProps) =>
        palette === "primary" ? theme.palette.primary.main : "white",
      borderColor: ({ palette }: StylesProps) =>
        palette === "primary" ? "white" : theme.palette.primary.main,
      color: ({ palette }: StylesProps) =>
        palette === "primary" ? "white" : theme.palette.primary.main,
    },
  },
});
