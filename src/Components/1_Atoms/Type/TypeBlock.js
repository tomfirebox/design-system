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
      mt: ["2rem"],
    },
    p: {
      lineHeight: "xl",
      mb: ["2rem"],
    },
    li: {
      mb: "1rem",
      lineHeight: "xl",
      position: "relative",
    },
    ul: {
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
          top: "0.2rem",
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
