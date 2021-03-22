import * as React from "react";

import { SectionText } from "./SectionText";

export default {
  component: SectionText,
  title: "Molecules/Landing/SectionText",
};

export const _SectionText = (): JSX.Element => (
  <SectionText
    flag="Section Flag"
    title="Section Title"
    subtitle="Section subtitle"
    range={[8, 13]}
    bgGradient={"linear(to-l, #7928CA,#FF0080)"}
  />
);
