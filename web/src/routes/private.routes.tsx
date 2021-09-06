import React from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "../pages/home/home";
import { isAuthenticated } from "../services/auth";

interface AuthenticatedRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<AuthenticatedRouteProps> = ({
  component: Component,
  path,
  exact,
}) => (
  <Route
    path={path}
    exact={exact}
    render={() => (isAuthenticated() ? <Component /> : <Redirect to="/" />)}
  />
);

const PrivateRoutes: React.FC = () => {
  const routes = [
    {
      path: "/home",
      component: Home,
      exact: true,
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <PrivateRoute
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </>
  );
};

export default PrivateRoutes;
