import { toUnicode } from "punycode";
import React from "react";
import { BsCardList, BsGrid } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import ListItem from "./components/list-item/list-item";

import { Container, ListContent } from "./styles";

const SIZE_ICON = 24;

const Menu: React.FC = () => {
  const listContent = [
    {
      title: "Todo's",
      icon: <BsCardList size={SIZE_ICON} />,
      link: "/home",
    },
    {
      title: "Categorias",
      icon: <BsGrid size={SIZE_ICON} />,
      link: "/categories",
    },
    {
      title: "Sair",
      icon: <ImExit size={SIZE_ICON} />,
      link: "/",
    },
  ];

  return (
    <Container>
      <ListContent>
        {listContent.map((titles) => (
          <ListItem
            icon={titles.icon}
            title={titles.title}
            link={titles.link}
          />
        ))}
      </ListContent>
    </Container>
  );
};

export default Menu;
