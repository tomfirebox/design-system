import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Box, Container } from "../../..";
import { ButtonNavPrimaryTopDesktop } from "./_atoms";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export const NavPimaryTopDesktop = ({ routes, ...props }) => (
  <Box bg="primary.base" color="white" overflow="hidden" {...props}>
    <Container>
      <Box
        as={motion.ul}
        variants={container}
        initial="hidden"
        animate="show"
        display="flex"
        justifyContent="flex-end"
      >
        {routes &&
          routes.map((route, i, arr) => (
            <motion.li key={route.to} variants={item}>
              <ButtonNavPrimaryTopDesktop
                as={NavLink}
                to={route.to}
                last={i === arr.length - 1}
                {...route}
              >
                {route.name}
              </ButtonNavPrimaryTopDesktop>
            </motion.li>
          ))}
      </Box>
    </Container>
  </Box>
);
