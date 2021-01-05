import React from "react";
import { motion } from "framer-motion";
import { Box } from "../../";

export const AnimationGrowIn = ({ delayIn = 0, delayOut = 0, ...props }) => {
  const variants = {
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: delayIn,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        delay: delayOut,
        duration: 0.4,
      },
    },
  };

  return <Box as={motion.div} {...props} {...{ variants }}></Box>;
};
