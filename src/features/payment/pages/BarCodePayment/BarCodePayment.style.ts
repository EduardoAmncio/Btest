import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({

  optionsSubheader: {
    marginTop: 20,
    justifyContent:"space-between",
    alignItems: "center"
  },
  balanceSubheader: {
    marginTop: 8,

    "& #account-balance": {
      fontWeight: 500,
    },
  },
  fieldValue: {
    textAlign: "right"
  },
  img: {
    height: 30,
    width: 30
  },
  btn: {
    maxWidth: 30,
  },
  btnDisplay: {
    marginTop: 20,
    textAlign: "center",
  },
});
