import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  bgButton: {
    width: "100%",
    maxWidth: "95px",
    height: "24px",
    padding: "2px",
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
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBgButton: {
    display: "absolute",
    width: "18px",
    height: "18px",
    marginRight: "10px",
    marginLeft: "-22px",
  },

  label: {
    fontSize: "8px",
    width: "auto",
  },
});
