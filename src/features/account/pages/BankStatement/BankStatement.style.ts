import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  balanceSubheader: {
    marginTop: 8,

    "& #account-balance": {
      fontWeight: 500,
    },
  },
  yourFinancesSection: {
    marginBottom: 16,
  },
  yourFinancesLabel: {
    fontSize: 12,
    fontWeight: 300,
  },
  filters: {
    marginBottom: 32,
  },
  searchField: {
    padding: "8px 16px",
  },
});
