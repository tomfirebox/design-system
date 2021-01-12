import React from "react";

import { Box } from "../../..";
import { NavPrimaryTopMobile } from "./NavPrimaryTopMobile";
import { NavPrimaryMiddleMobile } from "./NavPrimaryMiddleMobile";

export const NavPrimaryMobile = (props) => (
  <Box {...props}>
    <NavPrimaryTopMobile />
    <NavPrimaryMiddleMobile />
    {/* <NavPrimaryBottomMobile /> */}
  </Box>
);
