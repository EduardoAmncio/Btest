import React from "react";
import { Typography } from "@material-ui/core";
import OtpInput from 'react-otp-input';

import "./CardDigitsInput.scss";

interface DigitsCardProps {
    value: any;
    onChange: (event: any) => void;
}

export const DigitsCardInput = ({ value, onChange }: DigitsCardProps) => {

    return (
        <div className="digitscard-body">
            <Typography className="label-digitscard" color="primary" variant="caption" gutterBottom>
                <strong>4 últimos dígitos do cartão</strong>
            </Typography>
            <div className="digitscard-content">
                <OtpInput
                    className="digitscard-input"
                    value={value.digitscard}
                    onChange={onChange}
                    isInputSecure={true}
                    numInputs={4}
                />
            </div>
        </div>
    );
};
