import React, { useState } from "react";
import {
  Box,
  Container,
  LogoMark,
  LogoPrimary,
  config,
  HubLogoSelector,
  HubMarkSelector,
} from "../..";
import { AccordionPrimary } from "../../5_Molecules";

export const Logos = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AccordionPrimary
        label={<Container>Logos</Container >}
        setOpen={() => setOpen(!open)}
        {...{ open }}
      >

      <Box
        display="flex"
        borderTop="solid 1px"
        borderBottom="solid 1px"
        borderColor="gray.2"
        py="1.5rem"
      >
        <Container>
          <Box display="flex">
            <LogoMark mr="3rem" height="60px" />
            <LogoPrimary height="60px" />
          </Box>
        </Container>
      </Box>
      {config.sisterhubs
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((hub) => (
          <Box
            key={hub.code}
            borderTop="solid 1px"
            borderBottom="solid 1px"
            borderColor="gray.2"
            py="1.5rem"
          >
            <Container>
              <Box display="flex">
                <HubMarkSelector height="40px" mr="2rem" {...hub} />
                <HubLogoSelector height="40px" {...hub} />
              </Box>
            </Container>
          </Box>
        ))}
      </AccordionPrimary>
    </>
  );
};
