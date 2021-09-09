import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface ListItemProps {
  title: string;
  icon: JSX.Element;
  link: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, title, link }) => {
  const isActive = window.location.pathname === link;

  return (
    <Container>
      <Link to={link} className={isActive ? "active" : ""}>
        {icon}
        <span>{title}</span>
      </Link>
    </Container>
  );
};

export default ListItem;
