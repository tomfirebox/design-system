import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  // AnimatePresence
} from "framer-motion";
import { Box } from "../../";
import css from "@styled-system/css";
import { HubMarkSelector } from "../Logos";

export const AnimationLoaderFullPage = ({ children, loading = false }) => {
  const loaderVariants = {
    initial: {
      pointerEvents: "all",
      opacity: 1,
    },
    in: {
      opacity: 0,
      pointerEvents: "none",
      transition: { duration: 0.4, delay: loading ? 0.6 : 0.3 },
    },
    out: {
      opacity: 1,
      transition: { duration: 0.1 },
    },
  };

  const loaderinnerVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
    out: {
      opacity: 0,
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
        animate={!loading && "in"}
        exit="out"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <AnimatePresence>
          {loading && (
            <Box
              as={motion.div}
              variants={loaderinnerVariants}
              animate="in"
              exit="out"
              size="6rem"
            >
              <motion.div
                animate={{ rotate: 720 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <HubMarkSelector />
              </motion.div>
            </Box>
          )}
        </AnimatePresence>
      </Box>
      {children}
    </>
  );
};
