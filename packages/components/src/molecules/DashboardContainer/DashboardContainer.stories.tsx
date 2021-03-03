import { Box } from "@chakra-ui/react";

import { DashboardContainer } from "./DashboardContainer";

export default {
  component: DashboardContainer,
  title: "Molecules/DashboardContainer",
};

export const _DashboardContainer = (): JSX.Element => (
  <DashboardContainer>
    <Box bg="royalblue" w="100%" p={32} />
  </DashboardContainer>
);
