import type { FC } from "react";

import { Header } from "@sentrei/components/organisms/Header";

export const PageRoot: FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
