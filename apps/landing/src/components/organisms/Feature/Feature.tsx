import useTranslation from "next-translate/useTranslation";

import { FeatureGrid } from "@/components/molecules/FeatureGrid";
import { SectionContainer } from "@/components/molecules/SectionContainer";
import { SectionText } from "@/components/molecules/SectionText";

export const Feature = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <SectionText
        flag={t("index:feature.section.flag")}
        title={t("index:feature.section.title")}
        subtitle={t("index:feature.section.subtitle")}
        range={[0, 12]}
        bgGradient="linear(to-r, purple.400, blue.400, yellow.300)"
      />
      <FeatureGrid />
    </SectionContainer>
  );
};
