import React from "react";
import { NavPrimary } from "../";
import { RootBase } from "./RootBase";

export const RootFront = ({ children }) => (
  <RootBase>
    <NavPrimary />
    {children}
  </RootBase>
);
