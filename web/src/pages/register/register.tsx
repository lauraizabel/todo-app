import React from "react";
import Layout from "../../components/layout/layout";
import { ContainerTitles } from "../../components/layout/styles";
import RegisterForm from "./components/register-form/register-form";
import { ContainerForm } from "./styles";

const Register: React.FC = () => {
  return (
    <Layout>
      <ContainerTitles>
        <h1>Cadastre-se!</h1>
        <h2>Rápido e fácil.</h2>
      </ContainerTitles>
      <ContainerForm>
        <RegisterForm />
      </ContainerForm>
    </Layout>
  );
};

export default Register;
