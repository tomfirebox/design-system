import React, { useState } from "react";
import { Box } from "../../";

export const FormSelectPrimary = ({ options, sortSelectedFunction, optionSelected = () => {}, emptyLabel="Please select",  ...props }) => {
  const [collapsed, setCollapsed] = useState(true);
  const selected = [...options.filter(s => s.selected).sort(sortSelectedFunction)]

  return (
    <Box overflow="hidden" {...props}>
      <Dropdown onClick={() => setCollapsed(!collapsed)}>
      {!selected[0] ? emptyLabel : selected.map((s, i, arr) => {
        return <Box key={s.value} display="flex" mr="0.4rem">{s.label}{i < arr.length -1 && ","}</Box>
      })}
      </Dropdown>
      
    <Box height={collapsed ? 0 : "auto"}>
      {options.map((option) => (
        <FormSelectPrimaryItem key={option.value} onClick={() => {setCollapsed(true); optionSelected(option);}} selected={option.selected}>{option.label}</FormSelectPrimaryItem>
      ))}
    </Box>
    </Box>
  );
};

const Dropdown = props => <Box bg="lightgray" p="1rem" display='flex' {...props}/>

const FormSelectPrimaryItem = ({selected, ...props}) => (
  <Box p="1rem" border="solid 1px" bg={selected ? "green" : "white"} {...props} />
);
