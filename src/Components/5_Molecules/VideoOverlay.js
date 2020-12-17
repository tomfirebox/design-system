import React from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { Box, Canon, Minion } from "../";

export const VideoOverlay = ({ title = "Title Not Provided" }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <>
      <button onClick={() => toggleOpen()}>Click</button>
      <AnimatePresence>
        {isOpen && (
          <Frame
            initial={!isOpen ? "open" : "closed"}
            animate={isOpen ? "open" : "closed"}
            exit={!isOpen ? "open" : "closed"}
          >
            <Label>Next</Label>
          </Frame>
        )}
      </AnimatePresence>
    </>
  );
};

const Label = (props) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        y: { velocity: -100 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <Minion
      as={motion.p}
      textTransform="uppercase"
      {...{ variants }}
      {...props}
    />
  );
};  

const Frame = (props) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        delay: 0.2,
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <Box
      as={motion.div}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bg="primary.base"
      size="100%"
      {...{ variants }}
      {...props}
    />
  );
};
