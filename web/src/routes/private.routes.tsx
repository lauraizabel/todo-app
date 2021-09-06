import React from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "../pages/home/home";
import { isAuthenticated } from "../services/auth";

interface AuthenticatedRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  component: children,
  path,
  exact,
}: AuthenticatedRouteProps) =>
  isAuthenticated() ? (
    <Redirect to="/" />
  ) : (
    <Route path={path} exact={exact} component={children} />
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
        <AuthenticatedRoute
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
