import React from "react";
import { NavPrimary } from "../";
import { Switch, Route } from "react-router-dom";

export const RootFront = ({ children, path, routes = [] }) => (
  <>
    <NavPrimary />
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={`${path}${route.path}`}
          render={(props) => (
            <route.component routes={route.routes} {...route} {...props} />
          )}
        />
      ))}
    </Switch>
    {children}
  </>
);
