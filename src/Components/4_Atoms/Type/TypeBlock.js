import styled from "@emotion/styled";
import css from "@styled-system/css";

export const TypeBlock = styled.div(
  css({
    "*:last-child": { mb: 0 },
    lineHeight: "xl",
    fontSize: "1.1rem",
    h1: {
      lineHeight: "md",
      fontSize: ["3rem", "4rem"],
      fontWeight: "primary.bold",
      mb: ["1rem"],
    },
    h2: {
      lineHeight: "md",
      fontSize: ["2rem"],
      fontWeight: "primary.semibold",
      mb: ["1rem"],
      mt: ["2rem"],
    },
    p: {
      mb: ["2rem"],
    },
    a: {
      color: "primary.base",
      fontWeight: "primary.semibold",
    },
    li: {
      mb: "1rem",
      position: "relative",
    },
    ul: {
      mb: "3rem",
      pl: "1.2rem",
      li: {
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
    ol: {
      mb: "3rem",
      pl: "2.4rem",
      counterReset: "custom-counter",
      li: {
        counterIncrement: "custom-counter",
        "&:before": {
          content: "counter(custom-counter)",
          position: "absolute",
          bg: "primary.base",
          borderRadius: "100%",
          size: "1.7rem",
          left: "-2.4rem",
          top: "0.25rem",
          lineHeight: 1,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "primary.semibold",
          fontSize: "0.9rem",
        },
      },
    },
  })
);
