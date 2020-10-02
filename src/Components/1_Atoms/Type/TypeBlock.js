import styled from "@emotion/styled";
import css from "@styled-system/css";

export const TypeBlock = styled.div(
  css({
    h1: {
      lineHeight: "md",
      fontSize: ["3rem", "4rem"],
      fontWeight: "primary.bold",
      mb: ["1rem"],
    },
    h2: {
      lineHeight: "md",
      fontSize: ["1.5rem"],
      mb: ["1rem"],
    },
    p: {
      lineHeight: "xl",
      mb: ["2rem"],
    },
    ul: {
      bg: "lightgray",
      pl: "2rem",
    },
    li: {
      lineHeight: "xl",
    },
  })
);
