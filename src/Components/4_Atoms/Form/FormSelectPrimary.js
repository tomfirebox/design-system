import React, { useState, useRef, useEffect } from "react";
import { Box, Button } from "../../";
import gsap from "gsap";
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
  let container = useRef();
  let list = useRef();

  const [tween] = useState(gsap.timeline());
  const [collapseTween] = useState(gsap.timeline({ paused: true }));

  useEffect(() => {
    tween.to(container, { opacity: 1 });
    collapseTween.to(list, { autoAlpha: 1, y: 5, duration: 0.2 }).reverse();
    console.log("here");
  }, []);

  useEffect(() => {
    collapseTween.reversed(collapsed);
  }, [collapsed]);

  return (
    <Box opacity={0} ref={(e) => (container = e)} {...props}>
      <Dropdown onClick={() => setCollapsed(!collapsed)}>
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
      </Dropdown>

      <Box ref={(e) => (list = e)} opacity={0} visibility="hidden">
        {options.map((option) => (
          <FormSelectPrimaryItem
            key={option.value}
            onClick={() => {
              setCollapsed(true);
              optionSelected(option);
            }}
            selected={option.selected}
          >
            {option.label}
          </FormSelectPrimaryItem>
        ))}
      </Box>
    </Box>
  );
};

const Dropdown = (props) => (
  <Button width="100%" bg="lightgray" p="1rem" display="flex" {...props} />
);

const FormSelectPrimaryItem = ({ selected, ...props }) => (
  <Button
    textAlign="left"
    width="100%"
    p="1rem"
    border="solid 1px"
    borderBottom="transparent"
    bg={selected ? "green" : "white"}
    css={css({ ":hover": { bg: "red" } })}
    {...props}
  />
);
