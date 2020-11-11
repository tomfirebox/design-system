import React, { useState } from "react";
import {
  Box,
  Button,
  AnimationDropdown,
  FormInputPrimary,
} from "../../";
import css from "@styled-system/css";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2
    }
  },
  hidden: {
    opacity: 0,
    scale: 0.1,
    transition: { duration: 0.2 }
  }
}

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.3},
  show: { opacity: 1, y: 0, scale: 1 },
}

export const FormSelectPrimary = ({
  options,
  sortSelectedFunction,
  optionClicked = () => {},
  tokenClicked = () => {},
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

        <motion.div
          animate={{
            opacity: selected.length ? 0 : 1,
            position: selected.length ? 'absolute' : "relative",
          }}
        >
          {emptyLabel}
        </motion.div>
       
        <ul style={{ display: "flex", alignItems: "center", position: selected.length ? 'relative' : 'absolute' }}>
            <motion.div style={{ display: "flex"}}   initial="hidden"
                    animate="show"
                    exit="hidden" variants={container}
   >
                <AnimatePresence initial={true} >
            {selected.length &&
              selected.map((s, i, arr) => {
                return (
                  <motion.li
                    key={s.value}
                    layout
                    variants={item}
                    onClick={(e) => {e.stopPropagation(); tokenClicked(s)}}
                   
                  >
                    <Box
                      key={s.value}
                      display="flex"
                      mr="0.4rem"
                      alignItems="center"
                    >
                      {s.label}
                    </Box>
                  </motion.li>
                );
              })}
          </AnimatePresence>
              </motion.div>
        </ul>
      </DropdownButton>
      <Dropdown>
        {options.map((option, i, arr) => (
          <DropdownListItem
            key={option.value}
            onClick={() => {
              console.log(option)
              setCollapsed(true);
              optionClicked(option);
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

const Dropdown = (props) => (
  <Box
    border="solid 1px lightgray"
    overflow="hidden"
    borderRadius="0.3rem"
    boxShadow="md"
    mt="0.3rem"
    {...props}
  />
);

const DropdownListItem = ({ selected, last, ...props }) => (
  <Button
    textAlign="left"
    width="100%"
    px="1rem"
    py="0.2rem"
    height="40px"
    borderBottom={!last && "solid 1px lightgray"}
    css={css({ ":hover, :focus": { bg: "primary.4" } })}
    {...props}
  />
);
