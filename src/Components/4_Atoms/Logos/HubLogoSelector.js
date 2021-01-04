import React from "react";
import { LogoPrimaryMpn } from "./LogoPrimaryMpn";
import { LogoPrimaryAml } from "./LogoPrimaryAml";
import { LogoPrimaryLh } from "./LogoPrimaryLh";
import { LogoPrimaryGvhd } from "./LogoPrimaryGvhd";
import { LogoPrimaryMm } from "./LogoPrimaryMm";

export const HubLogoSelector = ({ code, ...props }) => {
  const OPTIONS = {
    lh: LogoPrimaryLh,
    mpn: LogoPrimaryMpn,
    aml: LogoPrimaryAml,
    gvhd: LogoPrimaryGvhd,
    mm: LogoPrimaryMm,
  };

  const Comp = OPTIONS[code] || OPTIONS.lh;
  return <Comp {...props} />;
};
