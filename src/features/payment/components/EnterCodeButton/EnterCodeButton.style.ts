import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    EnterCodeButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',

        background: "#FFFFFF",
        
        minWidth: "30px",
        minHeight: "130px",
        padding: "5px 0 5px 0",
        marginLeft: "30px",
       
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "9px",
        lineHeight: "11px",
        border: "0.5px solid #E8E8E8",
        borderRadius: "4px",
        color: "#323751",
    },
});
