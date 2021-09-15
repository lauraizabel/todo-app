import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Categories from "../pages/categories/categories";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import CustomRoutes from "./custom.routes";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Routes = () => {
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
    {
      path: "/home",
      component: Home,
      exact: true,
      isPrivate: true,
    },
    {
      path: "/categories",
      component: Categories,
      exact: true,
      isPrivate: true,
    },
  ];

  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <CustomRoutes
            path={route.path}
            component={route.component}
            exact={route.exact}
            isPrivate={route.isPrivate}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
