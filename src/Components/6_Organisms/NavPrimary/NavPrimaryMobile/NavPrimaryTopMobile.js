import React from "react";
import { Box, HubLogoSelector } from "../../../";

export const NavPrimaryTopMobile = () => {
  // const [open, isOpen] = useState();
  return (
    <>
      <Box
        bg="primary.base"
        color="white"
        height="60px"
        display="flex"
        alignItems="center"
      >
        <Box px="1rem">Nav</Box>
        <Box flexGrow="1" display="flex" justifyContent="center">
          <HubLogoSelector
            height="100%"
            width="100%"
            maxHeight="35px"
            reverse
          />
        </Box>
        <Box px="1rem">Nav</Box>
      </Box>
      <Box bg="red" position="fixed" height="100vh" width="100vw"></Box>
    </>
  );
};
