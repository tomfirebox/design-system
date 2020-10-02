import React from "react";
import { ButtonPrimary, Button, RootFront } from "./Components/";

export const App = () => (
  <RootFront>
    <ButtonPrimary disabled>Hello there</ButtonPrimary>
    <Button disabled>Another</Button>
    This is a font weight test
  </RootFront>
);
