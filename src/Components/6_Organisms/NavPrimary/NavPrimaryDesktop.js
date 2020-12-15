import React from "react";
import { Box } from "../../";
import { NavPimaryTopDesktop } from "./NavPimaryTopDesktop";
import { NavPrimaryBottomDesktop } from "./NavPrimaryBottomDesktop";
import { NavPrimaryMiddleDesktop } from "./NavPrimaryMiddleDesktop";

export const NavPrimaryDesktop = (props) => (
  <Box {...props}>
    <NavPimaryTopDesktop />
    <NavPrimaryMiddleDesktop />
    <NavPrimaryBottomDesktop />
  </Box>
);
