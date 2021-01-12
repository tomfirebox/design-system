import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, HubLogoSelector } from "../../../";

export const NavPrimaryMiddleDesktop = () => (
  <Container py="1.5rem">
    <Box display="flex">
      <Link to="/">
        <HubLogoSelector height="35px" mr="2rem" />
      </Link>
    </Box>
  </Container>
);
