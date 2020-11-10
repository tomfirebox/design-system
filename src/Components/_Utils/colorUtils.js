import { lighten } from "polished";

export const swatchGenerator = (
  hex,
  amount = 20,
  base = Math.floor(amount / 2)
) => {
  let newcolors = {
    base: lighten(0.5 - ((1 / amount) * base + 1 / amount), hex),
  };

  for (let i = 0; i < amount; i++) {
    newcolors[i + 1] = lighten(0.5 - ((1 / amount) * i + 1 / amount), hex);
  }

  return newcolors;
};