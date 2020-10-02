import React from "react";
import css from "@styled-system/css";
import { useTheme } from "emotion-theming";
import { darken, lighten } from "polished";
import { Button } from "../../";

export const ButtonPrimary = (props) => {
  const { colors } = useTheme();
  const bgColor = colors.primary.base;

  return (
    <Button
      css={css({
        bg: bgColor,
        color: "white",
        px: "20px",
        py: "5px",
        minHeight: "44px",
        borderRadius: "sm",
        fontSize: "1rem",
        fontWeight: "primary.semibold",
        transition: "background-color 0.2s ease, border 0.2s ease",
        border: `solid 2px ${bgColor}`,
        ":hover": {
          bg: darken(0.05, bgColor),
        },
        ":focus": {
          border: `dotted 2px ${darken(-1, bgColor)}`,
        },
        ":disabled": {
          opacity: 0.5,
        },
      })}
      {...props}
    />
  );
};
