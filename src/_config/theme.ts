import { createMuiTheme, darken, lighten } from "@material-ui/core";


export const colors = {
  primary: {
    main: "#323751",
    opacity: "#656982",
  },
  secondary: "#5F82A6",
  background: "#E8E8E8",
  green: "#3FC93C",
  red: "#FF2727",
  textFieldBorder: "#C4C4C4",
};

export const textColors = {
  primary: colors.primary.main,
  gray: "#555555",
};

export const theme = createMuiTheme({
  palette: {
    action: {
      disabledBackground: lighten(textColors.gray, 0.25),
      disabled: textColors.gray,
    },
    text: {
      primary: textColors.primary,
    },
    primary: {
      main: textColors.primary,
    },
    secondary: {
      main: "#5F82A6",
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        height: "100%",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "6px",
      },
      containedPrimary: {
        backgroundColor: colors.primary.main,
        color: "#fff",
        "&:hover": {
          color: "#fff",
          backgroundColor: darken(colors.primary.main, 0.1),
        },
      },
      containedSecondary: {
        color: textColors.primary,
        backgroundColor: "#fff",
        "&:hover": {
          backgroundColor: darken("#fff", 0.1),
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: "6px",
        borderWidth: "1.5px",
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: "6px",
      },
    },
    MuiLink: {
      root: {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  },
});
