import React from "react";
import { motion } from "framer-motion";
import { Box } from "../../2_Primitives";

export const AnimationFadeIn = ({ delayIn = 0, delayOut = 0, ...props }) => {
  const variants = {
    animate: {
      opacity: 1,
      transition: {
        delay: delayIn,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: delayOut,
      },
    },
  };
  return <Box as={motion.div} {...props} {...{ variants }}></Box>;
};
