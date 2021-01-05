import { swatchGenerator } from "../";

export const colors = {
  primary: swatchGenerator("#573a86", 20, 0.15),
  secondary: swatchGenerator("#342351", 20, 0.3),
  accent: swatchGenerator("#5ab578", 20, 0),
  gray: swatchGenerator("#1e1d21", 20, 0.4),
  lh: {
    primary: "#573a86",
    accent: "#5ab578",
  },
  aml: {
    primary: "#2d292b",
    accent: "#ff667d",
  },
  gvhd: {
    primary: "#2b2b57",
    accent: "#3cabf2",
  },
  mm: {
    primary: "#342f70",
    accent: "#d694f2",
  },
  mpn: {
    primary: "#1f3252",
    accent: "#ffb554",
  },
  mds: {
    primary: "#44184e",
    accent: "#d94044",
  },
  all: {
    primary: "#492462",
    accent: "#00adba",
  },
};
