import React from "react";
import { NavPrimaryDesktop } from "./NavPrimaryDesktop/NavPrimaryDesktop";
import { NavPrimaryMobile } from "./NavPrimaryMobile/NavPrimaryMobile";

const topRoutes = [
  { name: "Steering Committee", to: "/steering-committee" },
  { name: "About Us", to: "/about-us" },
  { name: "Newsletter", to: "/newsletter" },
  { name: "Contact", to: "/contact" },
];

const mainRoutes = [
  { name: "Subtypes", to: "/subtypes" },
  { name: "Therapeutics", to: "/therapeutics" },
  { name: "Congresses", to: "/congresses" },
  { name: "Trials", to: "/trials" },
  { name: "Expert Opinions", to: "/expert-opinions" },
];

export const NavPrimary = () => (
  <header>
    <NavPrimaryMobile display={{ md: "none" }} {...{ topRoutes, mainRoutes }} />
    <NavPrimaryDesktop display={{ _: "none", md: "block" }} {...{ topRoutes, mainRoutes }} />
  </header>
);
