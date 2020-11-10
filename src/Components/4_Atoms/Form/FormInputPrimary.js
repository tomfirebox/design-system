import icss from "@styled-system/css";
import React from "react";
import { Button } from "../../";

export const FormInputPrimary = ({ css, ...props }) => (
  <Button
    width="100%"
    border="solid 1px lightgray"
    borderRadius="0.3rem"
    px="1rem"
    py="0.2rem"
    height="40px"
    display="flex"
    alignItems="center"
    lineHeight="1.3"
    as="input"
    bg="white"
    fontSize="1rem"
    css={[icss({ cursor: "text", ':focus': { border: 'solid 1px', borderColor: 'primary.base'} }), css]}
    {...props}
  />
);
