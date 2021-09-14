import React from "react";
import { BiSad } from "react-icons/bi";
import Button from "../button/button";

import { Container } from "./styles";

const NoContent: React.FC = () => {
  return (
    <Container>
      <BiSad size={100} />
      <p className="top-line">Não há conteúdo para exibir.</p>
      <p>Deseja adicionar?</p>
      <Button variant="contained">Adicionar</Button>
    </Container>
  );
};

export default NoContent;
