import React, { useState } from "react";
import {
  motion,
  // AnimatePresence
} from "framer-motion";
import { Box } from "../../";
import css from "@styled-system/css";

export const AnimationLoaderFullPage = ({ children, loading = false }) => {
  const loaderVariants = {
    initial: { opacity: 0 },
    in: {
      opacity: 1,
      transition: {duration: 1}
    },
    out: {
      opacity: 0,
      transition: {duration: 1}
    },
  };

  return (
    <>
      {children}
      <Box
        position="absolute"
        height="100vh"
        width="100vw"
        top="0"
        bg="red"
        as={motion.div}
        variants={loaderVariants}
        initial="initial"
        animate={!loading && "out"}
        exit="in"
        css={css({ pointerEvents: "none" })}
      />
    </>
  );
};
