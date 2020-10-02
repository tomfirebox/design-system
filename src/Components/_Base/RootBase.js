import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../";
import "normalize.css";
import { css as scss } from "@styled-system/css";

export const RootBase = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap");
      `}
    />
    <Global
      styles={scss({
        html: {
          fontFamily: "primary",
          fontWeight: "primary.regular",
        },
      })}
    />
    {children}
  </ThemeProvider>
);
