import React from "react";
import { Typography } from "@material-ui/core";
import OtpInput from 'react-otp-input';

import "./TokenInput.scss";

interface TokenInputProps {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<any>>;
}

export const TokenInput = ({ value, onChange }: TokenInputProps) => {

    return (
        <div className="token-body">
            <div className="token-content">
                <Typography className="label-token" color="primary" variant="caption" gutterBottom>
                    <strong>Token</strong>
                </Typography>
                <OtpInput
                    className="token-input"
                    value={value}
                    onChange={onChange}
                    isInputSecure={true}
                    numInputs={6}
                />
            </div>
        </div>
    );
};
