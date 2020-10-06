import React from "react";
import { Box } from "../../";

export const BadgePrimary = (props) => (
  <Box
    as="span"
    bg="primary.base"
    p=".25em .4em"
    display="inline-block"
    fontSize="75%"
    fontWeight="primary.semibold"
    color="white"
    borderRadius="sm"
    lineHeight="1"
    {...props}
  />
);
