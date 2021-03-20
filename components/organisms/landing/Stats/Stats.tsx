import { SectionContainer } from "@sentrei/molecules/landing/SectionContainer";
import { SectionText } from "@sentrei/molecules/landing/SectionText";
import { StatStack } from "@sentrei/molecules/landing/StatStack";
import useTranslation from "next-translate/useTranslation";

import * as React from "react";

export const Stats = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <SectionText
        flag={t("index:stats.section.flag")}
        title={t("index:stats.section.title")}
        subtitle={t("index:stats.section.subtitle")}
        range={[12, 20]}
        bgGradient="linear(to-r, orange.400, red.400, pink.300)"
      />
      <StatStack />
    </SectionContainer>
  );
};
