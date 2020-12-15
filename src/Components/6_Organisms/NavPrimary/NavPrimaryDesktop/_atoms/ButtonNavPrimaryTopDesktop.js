import React from "react";
import { Button } from "../../../..";

export const ButtonNavPrimaryTopDesktop = ({ last, ...props }) => (
  <Button
    height="50px"
    px="2rem"
    fontSize="0.9rem"
    letterSpacing="1px"
    borderRight={last && "solid 1px"}
    borderLeft="solid 1px"
    borderColor="primary.10"
    textTransform="uppercase"
    {...props}
  />
);
