import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";

interface TextFieldProps {
  type?: "number" | "password";
  multiline?: boolean;
  error?: boolean;
  rows?: string;
  helperText?: string;
  placeholder?: string;
  label: string;
  value: string;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  startAdornment?: React.ReactNode;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  type,
  error,
  rows,
  helperText,
  placeholder,
  label,
  value,
  inputMode,
  startAdornment,
  minValue,
  maxValue,
  disabled,
  onChange,
}: TextFieldProps) => {
  return (
    <MuiTextField
      type={type}
      multiline={true}
      rows={rows}
      error={error}
      color="primary"
      placeholder={placeholder}
      disabled={disabled}
      label={label}
      value={value}
      helperText={helperText}
      variant="outlined"
      inputMode={inputMode}
      InputProps={{
        startAdornment,
      }}
      inputProps={{
        step: type === "number" ? 0.1 : undefined,
        min: minValue,
        max: maxValue,
        inputMode,
      }}
      fullWidth
      required
      onChange={onChange}
    />
  );
};
