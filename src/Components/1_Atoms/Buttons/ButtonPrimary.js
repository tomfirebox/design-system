import React from "react";
import css from "@styled-system/css";
import { Button } from "../../";

export const ButtonPrimary = (props) => (
  <Button
    css={css({
      bg: "primary.base",
      color: "white",
    })}
    {...props}
  />
);
