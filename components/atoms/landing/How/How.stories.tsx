import * as React from "react";
import { FcAssistant } from "react-icons/fc";

import { How } from "./How";

export default {
  component: How,
  title: "Atoms/How",
};

export const _How = (): JSX.Element => (
  <How title="Incredible How" icon={FcAssistant}>
    More value to the user
  </How>
);
