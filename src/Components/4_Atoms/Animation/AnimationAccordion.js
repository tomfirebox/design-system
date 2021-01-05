import React from "react";
import { Box, AnimationFadeIn, AnimationGrowIn } from "../../";
import { AnimatePresence } from "framer-motion";

export const AnimationAccordion = ({ children, open, ...props }) => (
  <Box {...props}>
    <Box>{children[0]}</Box>
    <AnimatePresence initial={false}>
      {open && (
        <AnimationGrowIn
          key="accordion"
          initial={!open ? "animate" : "exit"}
          animate={open ? "animate" : "exit"}
          exit={!open ? "animate" : "exit"}
          delayOut={0.1}
        >
          <AnimationFadeIn key="accordion-inner" delayIn={0.3}>
            {children[1]}
          </AnimationFadeIn>
        </AnimationGrowIn>
      )}
    </AnimatePresence>
  </Box>
);
