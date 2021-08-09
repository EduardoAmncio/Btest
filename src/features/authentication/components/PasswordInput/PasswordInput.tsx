import { TextField } from "@material-ui/core";

interface PasswordInputProps {
  value: string;
  onChange: (event: any) => void;
}

export const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  return (
    <TextField
      fullWidth
      color="primary"
      placeholder="Digite aqui"
      label="Senha"
      variant="outlined"
      type="password"
      required
      value={value}
      onChange={onChange}
    />
  );
};
