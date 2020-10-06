import styled from "@emotion/styled";
import { layout } from "styled-system";

export const Button = styled.button(
  {
    border: "none",
    background: "none",
    cursor: "pointer",
    appearance: "none",
    ":disabled": {
      cursor: "not-allowed",
    },
    ":focus": {
      outline: "none",
    },
  },
  layout,
  ({ css }) => css
);
