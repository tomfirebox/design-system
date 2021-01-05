import { useTheme } from "emotion-theming";
import React from "react";
import {
  Container,
  Trafalgar,
  Box,
  Button,
  copyTextToClipboard,
  Minion,
} from "../../";

export const Colors = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Trafalgar>Colors</Trafalgar>
      <Box display="flex" flexWrap="wrap">
        {Object.keys(colors).map((key) => (
          <Box flexGrow="1" flexShrink="0" py="1rem">
            <Minion textTransform="uppercase" mb="1rem">
              {key}
            </Minion>
            <Box display="flex">
              {Object.keys(colors[key]).map((innerkey) => (
                <Swatch
                  //   width={{ _: "4.6%" }}
                  mb="1rem"
                  name={innerkey}
                  value={colors[key][innerkey]}
                />
              ))}
              {/* {JSON.stringify(colors[key])} */}
            </Box>
          </Box>
        ))}
      </Box>
      {/* {JSON.stringify(colors)} */}
    </Container>
  );
};

const Swatch = ({ name, value, ...props }) => (
  <Button
    flexGrow="1"
    textAlign="left"
    p="0"
    onClick={() => copyTextToClipboard(value)}
    {...props}
  >
    <Box>
      <Box
        px="1.2rem"
        height="10rem"
        bg={value}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {(Number.isInteger(parseInt(name)) || name === "base") && (
          <Box
            size="1.5rem"
            bg="white"
            borderRadius="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Minion>{name === "base" ? "B" : name}</Minion>
          </Box>
        )}
      </Box>
    </Box>
  </Button>
);
