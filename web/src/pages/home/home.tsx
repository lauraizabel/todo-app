import React, { useState } from "react";
import LayoutPrivate from "../../components/layout-private/layout-private";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [todos, setTodos] = useState([]);
  return <LayoutPrivate />;
};

export default Home;
