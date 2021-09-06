import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/layout";
import Form from "./components/form/form-login";

import { ContainerTitles, ContainerForm, NoAccount } from "./styles";

const Login: React.FC = () => {
  return (
    <Layout>
      <ContainerTitles>
        <h1>Bem vindo ao Todo!</h1>
        <h2>Faça seu login para continuar</h2>
      </ContainerTitles>
      <ContainerForm>
        <Form />
      </ContainerForm>
      <NoAccount>
        <p>Ainda não tem uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </NoAccount>
    </Layout>
  );
};

export default Login;
