import React from "react";
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

export const AnimationItemsInOut = ({ children }) => 
    <motion.div
    style={{ display: "flex" }}
    initial="hidden"
    animate="show"
    exit="hidden"
    variants={container}
  >
    <AnimatePresence initial={true}>
      {children.length &&
        children.map(s => {
          return (
            <motion.div
              key={s.key}
              layout
              variants={item}
            >
                {s} 
            </motion.div>
          );
        })}
    </AnimatePresence>
  </motion.div>
  