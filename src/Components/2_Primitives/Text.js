import styled from "@emotion/styled";
import { color, layout, margin, typography } from "styled-system";

export const Text = styled.span(
  {},
  layout,
  color,
  margin,
  typography,
  ({ css }) => css
);
