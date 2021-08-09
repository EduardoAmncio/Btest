import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyle = makeStyles({
  containerVoucherDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  propButtonVoucherDetail: {
    width: "54px",
    height: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: "5px",
    background: "#FFFFFF",
    border: "1px solid #ECECEC",
    borderRadius: "8px",
  },

  iconVoucherDetail: {
    width: "14px",
    height: "14px",
    display: "flex",
    marginTop: "-6px",
    justifyContent: "center",
    alignContent: "center",
  },
  label: {
    fontSize: "8px",
  },
});
