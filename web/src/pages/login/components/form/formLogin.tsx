import React, { useState } from "react";
import LoginType from "../../../../@types/loginType";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import { login } from "../../../../services/rest/user/userRest";

import { Container, ContainerFields, ContainerButtons } from "./styles";

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState<LoginType>({
    email: "",
    password: "",
  });

  const onChangeValues = (value: string, name: "email" | "password") => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await login(formValues.email, formValues.password);
      alert("tudo certo :)");
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert("algo deu errado");
    }
  };

  return (
    <Container autoComplete="Off" onSubmit={onSubmit}>
      <ContainerFields>
        <Input
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          type="email"
          value={formValues.email}
          onChange={(e) => onChangeValues(e.target.value, "email")}
        />
      </ContainerFields>
      <ContainerFields>
        <Input
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          onChange={(e) => onChangeValues(e.target.value, "password")}
          value={formValues.password}
        />
      </ContainerFields>
      <ContainerButtons>
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </ContainerButtons>
    </Container>
  );
};

export default Form;
