import styled from "@emotion/styled";
import { layout } from "styled-system";

export const Button = styled.button(
  {
    border: "none",
    background: "none",
    cursor: "pointer",
  },
  layout,
  ({ css }) => css
);
