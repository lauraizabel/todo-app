import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";

const PublicRoutes: React.FC = () => {
  const routes = [
    {
      path: "/",
      component: Login,
      exact: true,
    },
    {
      path: "/register",
      component: Register,
      exact: true,
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          component={route.component}
          key={route.path}
        />
      ))}
    </>
  );
};

export default PublicRoutes;
