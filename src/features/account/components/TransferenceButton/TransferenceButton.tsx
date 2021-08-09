import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./TransferenceButton.scss";

interface TransferenceButtonProps {
    iconPath: string;
    title: string;
    redirectRoute: string
}

export const TransferenceButton: React.FC<TransferenceButtonProps> = ({ iconPath, title, redirectRoute }: TransferenceButtonProps) => {
    const historyRoutes = useHistory();
    const handleClick = () => {
        historyRoutes.push(redirectRoute);
      }

    return (
        <Button 
        onClick={handleClick}
        >
        <div className="bg-card" >
            <img src={iconPath} className="card-icon" alt="icon"/>
            <div className="card-label">
                {title}
            </div>
        </div>
        </Button>
    );
};
