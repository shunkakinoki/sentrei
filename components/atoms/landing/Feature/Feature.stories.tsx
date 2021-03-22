import * as React from "react";
import { FcDoughnutChart } from "react-icons/fc";

import { Feature } from "./Feature";

export default {
  component: Feature,
  title: "Atoms/Landing/Feature",
};

export const _Feature = (): JSX.Element => (
  <Feature title="Incredible feature" icon={FcDoughnutChart}>
    This feature is just too awesome !!!
  </Feature>
);
