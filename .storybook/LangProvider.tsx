import I18nProvider from "next-translate/I18nProvider";
import type { FC } from "react";

import common from "../locales/en/common.json";
import index from "../locales/en/index.json";

export const LangProvider: FC = ({ children }) => (
  <I18nProvider lang="en" namespaces={{ common, index }}>
    {children}
  </I18nProvider>
);
