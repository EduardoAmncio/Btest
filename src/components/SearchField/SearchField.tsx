import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import Search from "_assets/icons/iconSearch.svg";

interface SearchFieldProps {
  placeholder: string;
}

export const SearchField: React.FC<SearchFieldProps> = ({ placeholder }) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder={placeholder}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={Search} alt="search icon" />
          </InputAdornment>
        ),
      }}
    />
  );
};
