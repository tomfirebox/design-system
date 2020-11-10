import { colors } from './colors';
import { breakpoints, containerPoints } from "./breakpoints";

export const theme = {
  breakpoints,
  containerPoints,
  colors,
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
  shadows: {
    md: `
    0 1.6px 2.2px rgba(0, 0, 0, 0.014),
    0 3.9px 5.3px rgba(0, 0, 0, 0.02),
    0 7.3px 10px rgba(0, 0, 0, 0.025),
    0 13px 17.9px rgba(0, 0, 0, 0.03),
    0 24.2px 33.4px rgba(0, 0, 0, 0.036),
    0 58px 80px rgba(0, 0, 0, 0.05)`
  }
};
