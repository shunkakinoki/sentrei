import { FcDoughnutChart } from "react-icons/fc";

import { Feature } from "./Feature";

export default {
  component: Feature,
  title: "Atoms/Feature",
};

export const _Feature = (): JSX.Element => (
  <Feature title="Incredible feature" icon={<FcDoughnutChart />}>
    This feature is just too awesome !!!
  </Feature>
);
