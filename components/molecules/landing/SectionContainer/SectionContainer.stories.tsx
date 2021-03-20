import { Box } from "@chakra-ui/react";

import * as React from "react";

import { SectionContainer } from "./SectionContainer";

export default {
  component: SectionContainer,
  title: "Molecules/SectionContainer",
};

export const _SectionContainer = (): JSX.Element => (
  <SectionContainer>
    <Box bg="royalblue" w="100%" p={32} />
  </SectionContainer>
);
