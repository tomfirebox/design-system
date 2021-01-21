import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import { NavPrimary } from "../";

export const RootFront = ({ children, path, routes = [] }) => {
  const location = useLocation();
  return (
    <>
      <NavPrimary />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          {console.log(location, 'location')}
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
      </AnimatePresence>
      {children}
    </>
  );
};
