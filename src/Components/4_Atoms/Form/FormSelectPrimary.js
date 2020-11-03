import React from "react";
import { Box } from "../../";

export const FormSelectPrimary = ({ options, ...props }) => {
  return (
    <Box>
      {options.map((option) => (
        <FormSelectPrimaryItem>{option.label}</FormSelectPrimaryItem>
      ))}
    </Box>
  );
};

const FormSelectPrimaryItem = (props) => (
  <Box p="1rem" border="solid 1px" {...props} />
);
