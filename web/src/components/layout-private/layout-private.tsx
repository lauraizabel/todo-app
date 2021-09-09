import React from "react";
import Header from "../header/header";
import Menu from "../menu/menu";

import { Container, Content, LeftContent, RightContent } from "./styles";

const LayoutPrivate: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>
        <LeftContent>
          <Menu />
        </LeftContent>
        <RightContent>{children}</RightContent>
      </Content>
    </Container>
  );
};

export default LayoutPrivate;
