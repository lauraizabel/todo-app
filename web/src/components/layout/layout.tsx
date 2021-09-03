import React from "react";

import {
  Container,
  ContainerBackground,
  ContainerLogin,
  ContainerTitles,
} from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <ContainerBackground />
      <ContainerLogin>{children}</ContainerLogin>
    </Container>
  );
};

export default Layout;
