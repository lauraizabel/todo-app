import React from "react";
import ButtonMui from "@material-ui/core/Button";
import { Container } from "./styles";

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "text" | "outlined" | "contained";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  title,
  type = "button",
  children,
  variant = "text",
}: ButtonProps) => {
  return (
    <Container>
      <ButtonMui type={type} onClick={onClick} variant={variant}>
        {children}
      </ButtonMui>
    </Container>
  );
};

export default Button;
