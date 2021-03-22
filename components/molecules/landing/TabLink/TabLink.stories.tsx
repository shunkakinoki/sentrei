import * as React from "react";

import { TabLink } from "./TabLink";

export default {
  component: TabLink,
  title: "Molecules/Landing/TabLink",
};

export const _TabLink = (): JSX.Element => <TabLink>TabLink</TabLink>;

export const _ActiveTabLink = (): JSX.Element => (
  <TabLink aria-current="page">Active TabLink</TabLink>
);
