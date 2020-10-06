import styled from "@emotion/styled";
import {
  color,
  space,
  layout,
  flexbox,
  alignItems,
  position,
  border,
  typography,
  background,
  justifyContent,
  shadow,
  compose,
  system,
} from "styled-system";

export const Box = styled.div(
  { boxSizing: "border-box" },
  compose(
    color,
    space,
    layout,
    flexbox,
    alignItems,
    justifyContent,
    typography,
    border,
    background,
    shadow,
    position
  ),
  system({
    textTransform: true,
    textDecoration: true,
    boxDecorationBreak: true,
  }),
  ({ css }) => css
);
