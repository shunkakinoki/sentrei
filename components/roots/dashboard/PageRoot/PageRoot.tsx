import { DashboardContainer } from "@sentrei/organisms/dashboard/DashboardContainer";
import { SeoRoot } from "@sentrei/roots/base/SeoRoot";
import type { FC } from "react";

import * as React from "react";

export const PageRoot: FC = ({ children }) => (
  <>
    <SeoRoot />
    <DashboardContainer>{children}</DashboardContainer>
  </>
);
