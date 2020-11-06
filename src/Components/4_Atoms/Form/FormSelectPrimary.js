import React, { useState } from "react";
import { Box, Button, AnimationDropdown } from "../../";
import css from "@styled-system/css";

export const FormSelectPrimary = ({
  options,
  sortSelectedFunction,
  optionSelected = () => {},
  emptyLabel = "Please select",
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const selected = [
    ...options.filter((s) => s.selected).sort(sortSelectedFunction),
  ];

  return (
    <AnimationDropdown
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      {...props}
    >
      <DropdownButton onClick={() => setCollapsed(!collapsed)}>
        {!selected[0]
          ? emptyLabel
          : selected.map((s, i, arr) => {
              return (
                <Box key={s.value} display="flex" mr="0.4rem">
                  {s.label}
                  {i < arr.length - 1 && ","}
                </Box>
              );
            })}
      </DropdownButton>
      <Dropdown>
        {options.map((option) => (
          <DropdownListItem
            key={option.value}
            onClick={() => {
              setCollapsed(true);
              optionSelected(option);
            }}
            selected={option.selected}
          >
            {option.label}
          </DropdownListItem>
        ))}
      </Dropdown>
    </AnimationDropdown>
  );
};

const DropdownButton = (props) => (
  <Button
    width="100%"
    border="solid 1px lightgray"
    borderRadius="0.2rem"
    px="1rem"
    py="0.5rem"
    display="flex"
    css={css({
      transition: "background-color ease 0.2s",
      ":hover": { bg: "salmon" },
    })}
    {...props}
  />
);

const Dropdown = (props) => <Box {...props} />;

const DropdownListItem = ({ selected, ...props }) => (
  <Button
    textAlign="left"
    width="100%"
    border="solid 1px lightgray"
    px="1rem"
    py="0.5rem"
    borderBottom="transparent"
    bg={selected ? "green" : "white"}
    css={css({ ":hover": { bg: "gray" } })}
    {...props}
  />
);
