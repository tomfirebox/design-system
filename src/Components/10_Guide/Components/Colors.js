import React, { useState } from "react";
import { useTheme } from "emotion-theming";
import {
  Container,
  Box,
  Button,
  Minion,
  copyTextToClipboard,
  AccordionPrimary,
} from "../../";

export const Colors = () => {
  const { colors } = useTheme();
  const [open, setOpen] = useState(true);
  return (
    <AccordionPrimary
      label={<Container>Colours</Container>}
      setOpen={() => setOpen(!open)}
      {...{ open }}
    >
      <Container display="flex" flexWrap="wrap">
        {Object.keys(colors).map((key) => (
          <Box key={key} flexGrow="1" flexShrink="1" py="1rem" width="100%">
            <Minion textTransform="uppercase" mb="0.5rem">
              {key}
            </Minion>
            <Box display="flex" flexWrap="wrap">
              {Object.keys(colors[key]).map((innerkey) => (
                <Swatch
                  key={innerkey}
                  width={{ _: "4.7%" }}
                  name={innerkey}
                  value={colors[key][innerkey]}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </AccordionPrimary>
  );
};

const Swatch = ({ name, value, ...props }) => (
  <Button
    as="div"
    flexGrow="1"
    textAlign="left"
    p="0"
    onClick={() => copyTextToClipboard(value)}
    {...props}
  >
    <Box>
      <Box
        // px="0.3rem"
        height="5rem"
        bg={value}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          height="1.5rem"
          minWidth="1.5rem"
          bg="white"
          borderRadius="1.5rem"
          px="0.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Minion>{name === "base" ? "B" : name}</Minion>
        </Box>
      </Box>
    </Box>
  </Button>
);
