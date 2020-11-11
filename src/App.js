import React, { useState } from "react";
import {
  ButtonPrimary,
  Button,
  TypeBlock,
  Box,
  Canon,
  Guide,
  Container,
  Row,
  Column,
  BadgePrimary,
  FormSelectPrimary,
  FormInputPrimary,
  FormDropdown,
} from "./Components/";

import { RootFront } from "./Components/2_Primitives/RootFront";

export const App = () => {
  const [options, setOptions] = useState([
    {
      label: <BadgePrimary>Badge Primary 1</BadgePrimary>,
      selected: false,
      value: "test value",
    },
    {
      label: <BadgePrimary>Badge Primary 2</BadgePrimary>,
      selected: false,
      value: "test value2",
    },
    {
      label: <BadgePrimary>Badge Primary 3</BadgePrimary>,
      listLabel: <Box bg="red"></Box>,
      selected: false,
      value: "AHEY value",
    },
  ]);

  const sortAZValue = (a, b) => (a.value > b.value ? -1 : 1);
  const sortRecentlyUpdated = (a, b) => a.time - b.time;

  return (
    <RootFront>
      <Container py="3rem">
        <FormSelectPrimary
          optionSelected={(option) =>
            setOptions((prev) => {
              return prev.map((item) =>
                item === option
                  ? { ...option, time: new Date(), selected: !option.selected }
                  : item
              );
            })
          }
          sortSelectedFunction={sortRecentlyUpdated}
          options={options}
        />
        <FormDropdown />
        <FormInputPrimary placeholder="This is the placeholder" mb="1rem" />
      </Container>
    </RootFront>
  );
};
