import React from "react";
import { Box } from "../../";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.1,
    transition: { duration: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.3 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export const AnimationItemsInOut = ({ children, ...props }) => {
  const items = React.Children.toArray(children);

  return (
    <motion.div
      style={{ display: "flex" }}
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={container}
    >
      <AnimatePresence initial={true}>
        {items.length &&
          items.map((s, i, arr) => {
            return (
              <motion.li key={i} layout variants={item}>
                <Box
                  display="flex"
                  mr="0.4rem"
                  alignItems="center"
                >
                  {s}
                  {/* {s.label} */}
                </Box>
              </motion.li>
            );
          })}
      </AnimatePresence>
    </motion.div>
  );
};
