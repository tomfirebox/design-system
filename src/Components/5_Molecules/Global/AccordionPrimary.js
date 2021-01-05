import React from "react";
import { AnimationAccordion, Button } from "../../";

export const AccordionPrimary = ({
  label,
  open,
  setOpen,
  children,
  ...props
}) => (
  <AnimationAccordion {...{ open }} {...props}>
    <Button
      bg="gray.2"
      px="1rem"
      width="100%"
      height="3rem"
      display="flex"
      alignItems="center"
      onClick={() => setOpen()}
      fontSize="2rem"
      textTransform="uppercase"
    >
      {label}
    </Button>
    <div>{children}</div>
  </AnimationAccordion>
);
