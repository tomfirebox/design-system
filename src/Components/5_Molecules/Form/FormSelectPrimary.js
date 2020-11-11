import React, { useState } from "react";
import {
  Box,
  Button,
  AnimationDropdown,
  AnimationItemsInOut,
  Container,
  FormInputPrimary,
} from "../../";
import css from "@styled-system/css";
import { motion, AnimatePresence } from "framer-motion";

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
  const [notifications, setNotifications] = useState([0]);

  const remove = (arr, item) => {
    const newArr = [...arr];
    newArr.splice(
      newArr.findIndex((i) => i === item),
      1
    );
    console.log("yehh");
    return newArr;
  };

  const [index, setIndex] = useState(0);

  const add = (arr) => {
    setIndex(index + 1);
    return [...arr, index + 1];
  };

  return (
    // <div>
    //   <ul style={{display:'flex', flexDirection:'column-reverse'}}>
    //     <AnimatePresence initial={false}>
    //       {notifications.map((id) => (
    //         <motion.li
    //           key={id}
    //           layout
    //           initial={{
    //             opacity: 0,
    //             y: 0,
    //             scale: 0.3,
    //           }}
    //           animate={{
    //             opacity: 1,
    //             y: 0,
    //             scale: 1,
    //           }}
    //           exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}

    //         >
    //           <Box bg="red">
    //             <button
    //               onClick={() => setNotifications(remove(notifications, id))}
    //             >
    //               {JSON.stringify(id)}
    //               Close
    //             </button>
    //           </Box>
    //         </motion.li>
    //       ))}
    //     </AnimatePresence>
    //   </ul>
    //   <button
    //     className="add"
    //     onClick={() => setNotifications(add(notifications))}
    //   >
    //     +
    //   </button>
    // </div>
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
            // scale: selected.length ? 0.2 : 1,
          }}
        >
          {emptyLabel}
        </motion.div>
        {/* {!selected[0] ? (
          emptyLabel
        ) : (
        )} */}
        <ul style={{ display: "flex", alignItems: "center", position: selected.length ? 'relative' : 'absolute' }}>
          <AnimatePresence initial={false}>
            {selected.length &&
              selected.map((s, i, arr) => {
                return (
                  <motion.li
                    key={s.value}
                    layout
                    initial={{ opacity: 0, y: 0, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Box
                      key={s.value}
                      display="flex"
                      mr="0.4rem"
                      alignItems="center"
                    >
                      {s.label}
                      {/* {i < arr.length - 1 && ","} */}
                    </Box>
                  </motion.li>
                );
              })}
          </AnimatePresence>
        </ul>
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
    css={css({ ":hover": { bg: "primary.4" } })}
    {...props}
  />
);
