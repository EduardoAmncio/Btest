import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

interface DateInputProps {
  value: string | undefined;
  onChange: (date: MaterialUiPickersDate) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  return (
    <KeyboardDatePicker
      format="dd/MM/yyyy"
      value={value}
      onChange={onChange}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
};
