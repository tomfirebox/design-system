import React from "react";
import { ButtonPrimary, Button, RootFront, TypeBlock } from "./Components/";

export const App = () => (
  <RootFront>
    <ButtonPrimary disabled>Hello there</ButtonPrimary>
    <Button disabled>Another</Button>
    <h1>Hello</h1>
    <TypeBlock>
      <h1>Hey there</h1>
    </TypeBlock>
    This is a font weight test
  </RootFront>
);
