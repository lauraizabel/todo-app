import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoutes />
        <PrivateRoutes />
      </Switch>
    </Router>
  );
};

export default Routes;
