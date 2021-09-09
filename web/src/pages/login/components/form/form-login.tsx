import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginType from "../../../../@types/login-type";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import { saveAuthData } from "../../../../services/auth";
import { login } from "../../../../services/rest/user/userRest";
import LoginErrors from "./login-errors";

import { Container, ContainerFields, ContainerButtons, Error } from "./styles";

const Form: React.FC = () => {
  const [error, setError] = useState<string>("");
  const [formValues, setFormValues] = useState<LoginType>({
    email: "",
    password: "",
  });

  const history = useHistory();

  const onChangeValues = (value: string, name: "email" | "password") => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const { data } = await login(formValues.email, formValues.password);
      saveAuthData(data);
      history.push("/home");
    } catch (err: any) {
      const { message } = err.response.data;
      const mesageError =
        LoginErrors[message as keyof typeof LoginErrors] ||
        "Algo de errado aconteceu. Tente novamente.";

      setError(mesageError);
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
      <Error>{error}</Error>
      <ContainerButtons>
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </ContainerButtons>
    </Container>
  );
};

export default Form;
