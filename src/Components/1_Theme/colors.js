import { swatchGenerator, config } from "../";

const baseColors = {
  lh: {
    primary: "#573a86",
    secondary: "#342351",
    accent: "#5ab578",
    gray: "#1e1d21",
  },
  aml: {
    primary: "#2d292b",
    accent: "#ff667d",
    secondary: "#342351",
    gray: "#1e1d21",
  },
  gvhd: {
    primary: "#2b2b57",
    secondary: "#342351",
    accent: "#3cabf2",
    gray: "#1e1d21",
  },
  mm: {
    primary: "#342f70",
    accent: "#d694f2",
    secondary: "#342351",
    gray: "#1e1d21",
  },
  mpn: {
    primary: "#1f3252",
    accent: "#ffb554",
    secondary: "#342351",
    gray: "#1e1d21",
  },
  mds: {
    // real mds color
    primary: "#44184e",
    // fake mds color
    // primary: "#34495E",
    secondary: "#342351",
    accent: "#d94044",
    gray: "#1e1d21",
  },
  all: {
    primary: "#492462",
    accent: "#00adba",
    secondary: "#342351",
    gray: "#1e1d21",
  },
};

const hubcolors = {
  lh: {
    primary: swatchGenerator(baseColors.lh.primary, 40, 0.13),
    secondary: swatchGenerator(baseColors.lh.secondary, 40, 0.28),
    accent: swatchGenerator(baseColors.lh.accent, 40, -0.03),
    gray: swatchGenerator(baseColors.lh.gray, 40, 0.38),
  },
  aml: {
    primary: swatchGenerator(baseColors.aml.primary, 40, 0.32),
    secondary: swatchGenerator(baseColors.aml.secondary, 40, 0.28),
    accent: swatchGenerator(baseColors.aml.accent, 40, -0.19),
    gray: swatchGenerator(baseColors.aml.gray, 40, 0.38),
  },
  gvhd: {
    primary: swatchGenerator(baseColors.gvhd.primary, 40, 0.25),
    secondary: swatchGenerator(baseColors.gvhd.secondary, 40, 0.28),
    accent: swatchGenerator(baseColors.gvhd.accent, 40, -0.1),
    gray: swatchGenerator(baseColors.gvhd.gray, 40, 0.38),
  },
  mm: {
    primary: swatchGenerator(baseColors.mm.primary, 40, 0.18),
    secondary: swatchGenerator(baseColors.mm.secondary, 40, 0.28),
    accent: swatchGenerator(baseColors.mm.accent, 40, -0.25),
    gray: swatchGenerator(baseColors.mm.gray, 40, 0.38),
  },
  mpn: {
    primary: swatchGenerator(baseColors.mpn.primary, 40, 0.28),
    accent: swatchGenerator(baseColors.mpn.accent, 40, -0.17),
    secondary: swatchGenerator(baseColors.mpn.secondary, 40, 0.28),
    gray: swatchGenerator(baseColors.mpn.gray, 40, 0.38),
  },
  mds: {
    // real mds color
    primary: swatchGenerator(baseColors.mds.primary, 40, 0.3),
    // fake mds color
    // primary: swatchGenerator(baseColors.mds.primary, 40, 0.2),
    secondary: swatchGenerator(baseColors.mds.secondary, 40, 0.28),
    accent: swatchGenerator(baseColors.mds.accent, 40, -0.05),
    gray: swatchGenerator(baseColors.mds.gray, 40, 0.38),
  },
  all: {
    primary: swatchGenerator(baseColors.all.primary, 40, 0.24),
    secondary: swatchGenerator(baseColors.all.secondary, 40, 0.28),
    accent: swatchGenerator(baseColors.all.accent, 40, 0.14),
    gray: swatchGenerator(baseColors.all.gray, 40, 0.38),
  },
};

let primary = hubcolors[config.hub.code];

export const colors = {
  ...primary,
  ...baseColors,
};
