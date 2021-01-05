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
  zIndex,
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
    position,
    zIndex
  ),
  system({
    textTransform: true,
    textDecoration: true,
    boxDecorationBreak: true,
    visibility: true,
    zIndex: true,
  }),
  ({ css }) => css
);
