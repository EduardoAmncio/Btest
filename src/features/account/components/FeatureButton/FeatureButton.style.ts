import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  ftButton: {
    width: "100%",
    maxWidth: "140px",
    height: "120px",
    padding: "2px",
    marginRight: "5px",
    backgroundColor: "white",
    border: "0.5px solid #E8E8E8",
    borderRadius: "4px",
    boxShadow:
      "0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)",
    "&:hover": {
      borderWidth: "2",
    },
  },
  propButton: {
    padding: "10px",
    fontSize: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconFtButton: {
    display: "absolute",
    width: "64px",
    height: "64px",
    marginRight: "10px",
    marginLeft: "10px",
  },

  label: {
    fontSize: "8px",
    width: "auto",
  },
});
