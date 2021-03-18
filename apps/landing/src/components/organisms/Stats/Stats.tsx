import useTranslation from "next-translate/useTranslation";

import { SectionContainer } from "@/components/molecules/SectionContainer";
import { SectionText } from "@/components/molecules/SectionText";
import { StatStack } from "@/components/molecules/StatStack";

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
