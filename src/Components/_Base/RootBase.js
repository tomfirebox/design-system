import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider, useTheme } from "emotion-theming";
import { theme } from "../";
import "normalize.css";
import { css as scss } from "@styled-system/css";

export const RootBase = ({ children }) => {
  const { fontImport } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @import url(${fontImport});
        `}
      />
      <Global
        styles={scss({
          html: { fontFamily: "primary", fontWeight: "primary.bold" },
        })}
      />
      {children}
    </ThemeProvider>
  );
};
