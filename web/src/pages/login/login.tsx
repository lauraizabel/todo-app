import React from "react";
import { Link } from "react-router-dom";
import Form from "./components/form/formLogin";

import {
  Container,
  ContainerBackground,
  ContainerLogin,
  ContainerTitles,
  ContainerForm,
  NoAccount,
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <ContainerBackground />
      <ContainerLogin>
        <ContainerTitles>
          <h1>Bem vindo ao Todo!</h1>
          <h2>Faça seu login para continuar</h2>
        </ContainerTitles>
        <ContainerForm>
          <Form />
        </ContainerForm>
        <NoAccount>
          <p>Ainda não tem uma conta?</p>
          <Link to="/">Cadastre-se</Link>
        </NoAccount>
      </ContainerLogin>
    </Container>
  );
};

export default Login;
