import { lighten } from "polished";

export const swatchGenerator = (
  hex,
  amount = 20,
  base = Math.floor(amount / 2),
  adjustment = 0
) => {
  let newcolors = {
    base: lighten(
      0.5 - ((1 / amount) * base + 1 / amount),
      lighten(adjustment, hex)
    ),
  };

  for (let i = 0; i < amount; i++) {
    newcolors[i + 1] = lighten(
      0.5 - ((1 / amount) * i + 1 / amount),
      lighten(adjustment, hex)
    );
  }

  return newcolors;
};
