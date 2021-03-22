import * as React from "react";

import { Gradient } from "./Gradient";

export default {
  component: Gradient,
  title: "Atoms/Landing/Gradient",
};

export const _Gradient = (): JSX.Element => (
  <Gradient
    bgGradient="linear(to-l, #7928CA,#FF0080)"
    fontSize="6xl"
    fontWeight="extrabold"
    range={[10, 18]}
  >
    This is a gradient text
  </Gradient>
);
