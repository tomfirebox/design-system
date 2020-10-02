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
      pl: "1.2rem",
      li: {
        mb: "1rem",
        lineHeight: "xl",
        position: "relative",
        "&:before": {
          content: "'\\2022'",
          position: "absolute",
          fontSize: "2rem",
          left: "-1.2rem",
          top: "-0.05rem",
          lineHeight: 1,
          color: "primary.base",
        },
      },
    },
  })
);
