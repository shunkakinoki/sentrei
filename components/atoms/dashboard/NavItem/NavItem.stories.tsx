import * as React from "react";
import { BiBuoy } from "react-icons/bi";

import { NavItem } from "./NavItem";

export default {
  component: NavItem,
  title: "Atoms/NavItem",
};

export const _NavItem = (): JSX.Element => (
  <NavItem subtle icon={<BiBuoy />} label="Settings" />
);
