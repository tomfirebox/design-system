import React from "react";
import { LogoMarkLh } from "./LogoMarkLh";
import { LogoMarkMpn } from "./LogoMarkMpn";
import { LogoMarkAml } from "./LogoMarkAml";
import { LogoMarkGvhd } from "./LogoMarkGvhd";
import { LogoMarkMm } from "./LogoMarkMm";
import { LogoMarkMds } from "./LogoMarkMds";
import { LogoMarkAll } from "./LogoMarkAll";

export const HubMarkSelector = ({ code, ...props }) => {
  const OPTIONS = {
    lh: LogoMarkLh,
    mpn: LogoMarkMpn,
    aml: LogoMarkAml,
    gvhd: LogoMarkGvhd,
    mm: LogoMarkMm,
    mds: LogoMarkMds,
    all: LogoMarkAll,
  };

  const Comp = OPTIONS[code] || OPTIONS.lh;
  return <Comp {...props} />;
};
