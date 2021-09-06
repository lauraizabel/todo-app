import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import {
  Container,
  ContainerFields,
  ContainerDoubleFields,
  ContainerButton,
  HaveAccount,
} from "./styles";
import RegisterType from "../../../../@types/registerType";
import { register } from "../../../../services/rest/user/userRest";
import Errors from "./register-errors";

const RegisterForm: React.FC = () => {
  const [formValues, setFormValues] = useState<RegisterType>({
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const history = useHistory();

  const onChangeValues = (
    value: string,
    name: "confirmPassword" | "password" | "firstName" | "lastName" | "email"
  ) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const schema = yup.object().shape({
        email: yup.string().email().required(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        password: yup.string().required().min(6),
        confirmPassword: yup
          .string()
          .required()
          .min(6)
          .oneOf([yup.ref("password")], "As senhas não conferem"),
      });

      await schema.validateSync(formValues);
      // await register(formValues);
      history.push("/");
    } catch (err: any) {
      setError(Errors[(err.path as keyof typeof Errors) ?? "default"]);
    }
  };

  return (
    <Container onSubmit={onSubmit}>
      <ContainerDoubleFields>
        <Input
          placeholder="Nome"
          name="firstName"
          value={formValues.firstName}
          onChange={(e) => onChangeValues(e.target.value, "firstName")}
        />
        <Input
          placeholder="Sobrenome"
          name="lastName"
          value={formValues.lastName}
          onChange={(e) => onChangeValues(e.target.value, "lastName")}
        />
      </ContainerDoubleFields>
      <ContainerFields>
        <Input
          placeholder="E-mail"
          name="email"
          value={formValues.email}
          type="email"
          onChange={(e) => onChangeValues(e.target.value, "email")}
        />
      </ContainerFields>
      <ContainerDoubleFields>
        <Input
          placeholder="Senha"
          type="password"
          value={formValues.password}
          name="password"
          onChange={(e) => onChangeValues(e.target.value, "password")}
        />
        <Input
          placeholder="Confirmar senha"
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={(e) => onChangeValues(e.target.value, "confirmPassword")}
        />
      </ContainerDoubleFields>
      <ContainerButton>
        <h5 className="error">{error}</h5>
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
        <HaveAccount>
          <h5>Já possui conta?</h5>
          <Link to="/">Entrar</Link>
        </HaveAccount>
      </ContainerButton>
    </Container>
  );
};

export default RegisterForm;
