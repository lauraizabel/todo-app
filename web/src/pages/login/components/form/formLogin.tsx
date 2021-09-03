import React from "react";
import Button from "../../../../components/button";
import Input from "../../../../components/input";

import { Container, ContainerFields, ContainerButtons } from "./styles";

const Form: React.FC = () => {
  return (
    <Container autoComplete="Off">
      <ContainerFields>
        <Input label="E-mail" placeholder="Digite seu e-mail" type="email" />
      </ContainerFields>
      <ContainerFields>
        <Input label="Senha" placeholder="Digite sua senha" type="password" />
      </ContainerFields>
      <ContainerButtons>
        <Button variant="contained">Entrar</Button>
      </ContainerButtons>
    </Container>
  );
};

export default Form;
