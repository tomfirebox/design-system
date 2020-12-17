import React, { useState } from "react";
import {
  // Box,
  // Container,
  // BadgePrimary,
  // FormSelectPrimary,
  // FormInputPrimary,
  VideoOverlay,
  Box,
  Article,
  Container,
} from "./Components/";

import { RootFront } from "./Components/2_Primitives/RootFront";

export const App = () => {
  // const [options, setOptions] = useState([
  //   {
  //     label: <BadgePrimary>Badge Primary 1 - this is something</BadgePrimary>,
  //     selected: false,
  //     value: "test value",
  //   },
  //   {
  //     label: <BadgePrimary>Badge Primary 2 - this is something</BadgePrimary>,
  //     selected: false,
  //     value: "test value2",
  //   },
  //   {
  //     label: <BadgePrimary>Badge Primary 3</BadgePrimary>,
  //     listLabel: <Box bg="red"></Box>,
  //     selected: false,
  //     value: "AHEY value",
  //   },
  // ]);

  // const sortAZValue = (a, b) => (a.value > b.value ? -1 : 1);
  // const sortRecentlyUpdated = (a, b) => {
  //   const x = a.time || 0;
  //   const y = b.time || 0;
  //   return x - y;
  // };

  // const toggleOption = (option) => {
  //   setOptions((prev) => {
  //     return prev.map((item) =>
  //       item === option
  //         ? { ...option, time: new Date(), selected: !option.selected }
  //         : item
  //     );
  //   });
  // };
  return (
    <RootFront>
      <Container py="2rem">
        <Box width="800px" height="400px">
          <VideoOverlay />
        </Box>
      </Container>
      {/* <Container py="3rem">
        <FormSelectPrimary
          optionClicked={toggleOption}
          tokenClicked={toggleOption}
          sortSelectedFunction={sortRecentlyUpdated}
          options={options}
          mb='8rem'
        />
        <FormInputPrimary placeholder="This is the placeholder" mb="1rem" />
      </Container> */}
      <Article />
    </RootFront>
  );
};
