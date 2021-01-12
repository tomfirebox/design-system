import css from "@styled-system/css";
import React from "react";
import { Button } from "../../../..";

export const ButtonNavPrimaryTopDesktop = ({ last, active, ...props }) => (
  <Button
    height="40px"
    px="1.5rem"
    fontSize="0.8rem"
    letterSpacing="1px"
    borderRight={last && "solid 1px"}
    borderLeft="solid 1px"
    borderColor="rgba(255,255,255,0.1)"
    textTransform="uppercase"
    display="flex"
    alignItems="center"
    textDecoration="none"
    css={css({
      transition: "background ease 0.2s",
      "&:hover": { bg: "rgba(0,0,0,0.1)" },
      "&.active": { bg: "rgba(0,0,0,0.2)" },
    })}
    {...props}
  />
);
