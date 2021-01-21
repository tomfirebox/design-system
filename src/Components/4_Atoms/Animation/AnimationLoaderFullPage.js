import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, AnimationLoaderSpinner } from "../../";

export const AnimationLoaderFullPage = ({ children, loading }) => {
  const loaderVariants = {
    initial: {
      pointerEvents: "all",
      opacity: 1,
    },
    animate: {
      opacity: 0,
      pointerEvents: "none",
      transition: { duration: 0.4, delay: loading ? 0.6 : 0.3 },
    },
    exit: {
      opacity: 1,
      transition: { duration: 0.1 },
    },
  };

  return (
    <>
      <Box
        position="fixed"
        height="100vh"
        width="100vw"
        top="0"
        bg="primary.base"
        as={motion.div}
        variants={loaderVariants}
        initial="initial"
        animate={!loading && "animate"}
        exit="exit"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <AnimatePresence>
          {loading && <AnimationLoaderSpinner delayIn={0.3} />}
        </AnimatePresence>
      </Box>
      {children}
    </>
  );
};
