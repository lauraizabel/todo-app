import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoutes from "./public.routes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoutes />
      </Switch>
    </Router>
  );
};

export default Routes;
