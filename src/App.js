// import { useCycle } from "framer-motion";
import React from "react";
import {
  // Box,
  // Container,
  // BadgePrimary,
  // FormSelectPrimary,
  // FormInputPrimary,
  // Container,
  // VideoOverlay,
  LogoPrimaryAml,
  LogoPrimaryMm,
  Box,
  Article,
  Guide,
  LogoPrimaryLh,
  LogoMarkAml,
  LogoMarkLh,
  LogoMarkGvhd,
  LogoPrimaryGvhd,
  LogoMarkMm,
  LogoPrimaryMpn,
  HubLogoSelector,
  LogoMarkMpn,
  config,
  HubMarkSelector,
  Container,
  LogoPrimary,
  LogoMark,
} from "./Components/";

import { RootFront } from "./Components/2_Primitives/RootFront";

export const App = () => {
  // const [isOpen, toggleOpen] = useCycle(true, false);
  // const [bg, setBg] = useState();
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
      <Box
        display="flex"
        borderTop="solid 1px"
        borderBottom="solid 1px"
        borderColor="gray.2"
        py="1.5rem"
      >
        <Container>
          <Box display="flex">
            <LogoMark mr="3rem" height="60px" />
            <LogoPrimary height="60px" />
          </Box>
        </Container>
      </Box>
      {config.sisterhubs.map((hub) => (
        <Box
          borderTop="solid 1px"
          borderBottom="solid 1px"
          borderColor="gray.2"
          py="1.5rem"
        >
          <Container>
            <Box display="flex">
              <HubMarkSelector height="40px" mr="2rem" {...hub} />
              <HubLogoSelector height="40px" {...hub} />
            </Box>
          </Container>
        </Box>
      ))}
      <Guide />
      {/* <Container py="2rem">
        <button onClick={() => toggleOpen()}>Click</button>
        <Box width="800px" height="450px">
          <VideoOverlay
            timerFinished={() => setBg("salmon")}
            closeClicked={() => {
              toggleOpen();
              setBg();
            }}
            confirmClicked={() => {
              setBg("salmon");
            }}
            {...{ isOpen, bg }}
          />
        </Box>
      </Container> */}
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
