import React from "react";
import { LogoPrimaryMpn } from "./LogoPrimaryMpn";
import { LogoPrimaryAml } from "./LogoPrimaryAml";
import { LogoPrimaryLh } from "./LogoPrimaryLh";
import { LogoPrimaryGvhd } from "./LogoPrimaryGvhd";
import { LogoPrimaryMm } from "./LogoPrimaryMm";
import { LogoPrimaryMds } from "./LogoPrimaryMds";
import { LogoPrimaryAll } from "./LogoPrimaryAll";
import { config } from "../../";

export const HubLogoSelector = ({ code = config.hub.code, ...props }) => {
  const OPTIONS = {
    lh: LogoPrimaryLh,
    mpn: LogoPrimaryMpn,
    aml: LogoPrimaryAml,
    gvhd: LogoPrimaryGvhd,
    mm: LogoPrimaryMm,
    mds: LogoPrimaryMds,
    all: LogoPrimaryAll,
  };

  const Comp = OPTIONS[code] || OPTIONS.lh;
  return <Comp {...props} />;
};
