import { useTheme } from "emotion-theming";
import React from "react";
import { Container, Trafalgar, Box } from "../../";

export const Colors = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Trafalgar>Colors</Trafalgar>
      {Object.keys(colors).map((key) => (
        <Box display="flex">
          <div>{key}</div>
          {Object.keys(colors[key]).map((innerkey) => (
            <Swatch name={innerkey} value={colors[key][innerkey]} />
          ))}
          {/* {JSON.stringify(colors[key])} */}
        </Box>
      ))}
      {/* {JSON.stringify(colors)} */}
    </Container>
  );
};

const Swatch = ({ name, value, ...props }) => (
  <Box size="3rem" {...props}>
    <p>{name}</p>
    <Box size="2rem" bg={value} />
  </Box>
);
