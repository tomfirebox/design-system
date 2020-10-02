import React from "react";
import css from "@styled-system/css";
import { Button } from "../../";
import { minHeight } from "styled-system";

export const ButtonPrimary = (props) => (
  <Button
    css={css({
      bg: "primary.base",
      color: "white",
      px: "20px",
      py: "5px",
      minHeight: "44px",
      borderRadius: "sm",
    })}
    {...props}
  />
);
