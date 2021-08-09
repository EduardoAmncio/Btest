import React from "react";
import { TextField } from "@material-ui/core";

import "./inputTransfer.scss"

interface InputTransferProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasDisabled?: boolean;
}

export const InputTransfer = ({ label, placeholder, onChange, value, hasDisabled }: InputTransferProps) => {
  return (
  <div className="inputBackground">
    <label id="labelId"> {label }</label>
    <TextField
        id="inputTransfer"
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
        disabled={hasDisabled}
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
        required
        />
  </div>
  );
};