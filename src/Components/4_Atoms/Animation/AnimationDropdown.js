import React from "react";
import { Box } from "../../";
import css from "@styled-system/css";
import { motion, AnimatePresence } from "framer-motion";


export const AnimationDropdown = ({ children, collapsed = true, ...props }) => 
    <Box position='relative' css={css({zIndex: 20})} {...props}>
      <Box>{children[0]}</Box>
      <Box position='absolute' width='100%' >
      <AnimatePresence >
        { !collapsed && 
        <motion.div  
          key="dropdown"
          initial={{ opacity: 0, y: 5,  }}
          animate={{ opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.1 } }}
          exit={{ opacity: 0, y: 5 , transition: { duration: 0.2 }}}
        >
          {children[1]}
        </motion.div>}
      </AnimatePresence>
      </Box>
    </Box>
  
