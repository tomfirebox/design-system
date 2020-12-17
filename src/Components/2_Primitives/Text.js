import styled from "@emotion/styled";
import { color, layout, margin, system, typography } from "styled-system";

export const Text = styled.span(
  {},
  layout,
  color,
  margin,
  typography,
  system({
    textTransform: true,
    textDecoration: true,
  }),
  ({ css }) => css
);
