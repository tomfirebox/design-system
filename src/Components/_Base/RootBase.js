import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../";

export const RootBase = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
