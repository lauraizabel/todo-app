import React from "react";

import { TextField } from "@material-ui/core";

import { Container } from "./styles";

interface InputProps {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  onChange = () => {},
  type = "text",
  value = "",
  label,
  placeholder,
  required = false,
  name = "",
}: InputProps) => {
  return (
    <Container>
      <TextField
        defaultValue={value}
        type={type}
        onChange={onChange}
        label={label}
        variant="outlined"
        placeholder={placeholder}
        required={required}
        name={name}
      />
    </Container>
  );
};

export default Input;
