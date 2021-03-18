import type { FC } from "react";

import { DashboardContainer } from "@/components/molecules/DashboardContainer";
import { PageRoot } from "@/components/roots/PageRoot";

export const DashboardScreen: FC = () => (
  <PageRoot type="dashboard">
    <DashboardContainer>
      <></>
    </DashboardContainer>
    <DashboardContainer>
      <></>
    </DashboardContainer>
    <DashboardContainer>
      <></>
    </DashboardContainer>
  </PageRoot>
);
