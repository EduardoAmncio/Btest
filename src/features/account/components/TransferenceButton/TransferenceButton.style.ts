import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
    transferenceButton: {
    width: "100px",
    fontSize: "10px",
    height: "37px",
    color: "#E8E8E8",
    border: "1px solid #E8E8E8",
    backgroundColor: "primary",
    "&:hover": {
      backgroundColor: "primary",
      border: "1px solid white",
    },
  },
});
