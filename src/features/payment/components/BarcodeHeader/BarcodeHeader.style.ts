import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '-1px',
    width: '20%',
    minWidth: '80px',
    height: '100vh',
    background: "#323751",
    alignItems: 'left',
  },  

  optionBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0 8px 0',
  },

  menuName: {
    display: 'flex',
    marginTop: '15px',
    color: '#F2F2F2',
    fontWeight: 500,
  },

  text: {
    marginTop: '25px',
    color: '#ffffff',
  },

  buttonClose: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    padding: '5px 3px 5px 3px',
    background: '#FFFFFF',
    marginBottom: '10px',
  },
});