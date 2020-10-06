import { breakpoints, containerPoints } from "./breakpoints";

export const theme = {
  breakpoints,
  containerPoints,
  colors: {
    primary: {
      base: "#5B60F2",
    },
    secondary: {
      base: "#811A69",
    },
  },
  radii: {
    none: 0,
    sm: "5px",
  },
  fontWeights: {
    primary: {
      thin: 300,
      regular: 400,
      semibold: 600,
      bold: 800,
    },
  },
  fonts: {
    primary: "'Rubik', sans-serif",
  },
  lineHeights: {
    sm: 1.1,
    md: 1.4,
    lg: 1.6,
    xl: 2,
  },
};
