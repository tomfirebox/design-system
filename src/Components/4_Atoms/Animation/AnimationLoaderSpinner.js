import React from "react";
import { motion } from "framer-motion";
import { Box, HubMarkSelector } from "../../";

export const AnimationLoaderSpinner = ({ delayIn = 0.1, ...props }) => {
  const loaderinnerVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: delayIn },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };
  return (
    <Box
      as={motion.div}
      variants={loaderinnerVariants}
      animate="animate"
      exit="exit"
      size="6rem"
      {...props}
    >
      <motion.div
        animate={{ rotate: 720 }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <HubMarkSelector />
      </motion.div>
    </Box>
  );
};
