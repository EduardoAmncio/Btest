import { TextField } from "@material-ui/core";

interface SignInInputProps {
  value: string;
  onChange: (event: any) => void;
}

export const SignInInput = ({ value, onChange }: SignInInputProps) => {
  return (
    <TextField
      fullWidth
      color="primary"
      placeholder="Digite apenas números"
      label="CPF ou CNPJ"
      variant="outlined"
      required
      value={value}
      onChange={onChange}
    />
  );
};

