import React from "react";
import { Box, Container } from "../../..";
import { ButtonNavPrimaryTopDesktop } from "./_atoms";

export const NavPimaryTopDesktop = ({ routes, ...props }) => (
  <Box bg="primary.base" color="white" {...props}>
    <Container>
      <Box display="flex" justifyContent="flex-end">
        {routes &&
          routes.map((route, i, arr) => (
            <ButtonNavPrimaryTopDesktop
              key={route.to}
              last={i === arr.length - 1}
              {...route}
            >
              {route.name}
            </ButtonNavPrimaryTopDesktop>
          ))}
      </Box>
    </Container>
  </Box>
);
