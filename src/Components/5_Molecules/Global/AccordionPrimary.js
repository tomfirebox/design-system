import React from "react";
import { AnimationAccordion } from "../../";

export const AccordionPrimary = ({ label, ...props }) => (
  <AnimationAccordion>
    <div>{label}</div>
    <div>content</div>
  </AnimationAccordion>
);
