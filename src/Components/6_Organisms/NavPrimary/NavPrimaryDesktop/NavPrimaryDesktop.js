import React from "react";
import { Box } from "../../..";
import { NavPimaryTopDesktop } from "./NavPimaryTopDesktop";
import { NavPrimaryBottomDesktop } from "./NavPrimaryBottomDesktop";
import { NavPrimaryMiddleDesktop } from "./NavPrimaryMiddleDesktop";

export const NavPrimaryDesktop = ({ mainRoutes, topRoutes, ...props }) => (
  <Box {...props}>
    <NavPimaryTopDesktop routes={topRoutes} />
    <NavPrimaryMiddleDesktop />
    <NavPrimaryBottomDesktop routes={mainRoutes} />
  </Box>
);
