import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme } from "..";
import "reset-css";
import { css as scss } from "@styled-system/css";
import { routes } from "../";
import { AnimatePresence } from "framer-motion";

export const RootBase = () => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap");
      `}
    />
    <Global
      styles={scss({
        "*": {
          color: "inherit",
        },
        strong: {
          fontWeight: "primary.semibold",
        },
        html: {
          fontFamily: "primary",
          fontWeight: "primary.regular",
          color: "black",
        },
      })}
    />
    <Router>
      <AnimatePresence>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              render={(props) => (
                <route.component {...props} {...route} routes={route.routes} />
              )}
            />
          ))}
        </Switch>
      </AnimatePresence>
    </Router>
  </ThemeProvider>
);
