import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

interface CustomRoutesProps {
  component: React.FC;
  path: string;
  exact: boolean;
  isPrivate?: boolean;
}

const CustomRoutes: React.FC<CustomRoutesProps> = ({
  component,
  path,
  exact,
  isPrivate = false,
}) => {
  if (isPrivate && !isAuthenticated()) {
    return <Redirect to="/" />;
  }

  return <Route path={path} exact={exact} component={component} />;
};

export default CustomRoutes;
