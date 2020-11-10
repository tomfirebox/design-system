import React, { useState } from "react";
import { Box, Button, AnimationDropdown } from "../../";
import css from "@styled-system/css";
import { FormInputPrimary } from "../../4_Atoms";

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
      onMouseLeave={() => setCollapsed(true)}
      {...props}
    >
      <DropdownButton onClick={() => setCollapsed(!collapsed)}>
        {!selected[0]
          ? emptyLabel
          : selected.map((s, i, arr) => {
              return (
                <Box key={s.value} display="flex" mr="0.4rem" alignItems='center'>
                  {s.label}
                  {i < arr.length - 1 && ","}
                </Box>
              );
            })}
      </DropdownButton>
      <Dropdown>
        {options.map((option, i, arr) => (
          <DropdownListItem
            key={option.value}
            onClick={() => {
              setCollapsed(true);
              optionSelected(option);
            }}
            selected={option.selected}
            last={i === arr.length - 1}
          >
            {option.label}
          </DropdownListItem>
        ))}
      </Dropdown>
    </AnimationDropdown>
  );
};

const DropdownButton = (props) => (
  <FormInputPrimary
    as="button"
    css={css({
      cursor: "pointer",
      transition: "background-color ease 0.2s",
      ":hover": { bg: "primary.4" },
    })}
    {...props}
  />
);

const Dropdown = (props) => <Box border="solid 1px lightgray" overflow='hidden' borderRadius='0.3rem' boxShadow='md' mt='0.3rem' {...props} />;

const DropdownListItem = ({ selected, last, ...props }) => (
  <Button
    textAlign="left"
    width="100%"
    px="1rem"
    py="0.2rem"
    height='40px'
    borderBottom={!last && "solid 1px lightgray"}
    css={css({ ":hover": { bg: "primary.4" } })}
    {...props}
  />
);
