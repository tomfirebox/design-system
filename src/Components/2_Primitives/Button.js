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
} from "styled-system";

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
    fontSize: "inherit",
    fontFamily: "inherit"
  },
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
  ({ css }) => css
);
