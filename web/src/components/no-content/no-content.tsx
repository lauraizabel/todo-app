import React from "react";
import { BiSad } from "react-icons/bi";
import Button from "../button/button";

import { Container } from "./styles";

interface NoContentProps {
  onClick?: () => void;
}

const NoContent: React.FC<NoContentProps> = ({ onClick = () => {} }) => {
  return (
    <Container>
      <BiSad size={100} />
      <p className="top-line">Não há conteúdo para exibir.</p>
      <p>Deseja adicionar?</p>
      <Button variant="contained" onClick={onClick}>
        Adicionar
      </Button>
    </Container>
  );
};

export default NoContent;
