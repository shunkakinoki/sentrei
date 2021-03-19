import { FeatureGrid } from "@sentrei/molecules/landing/FeatureGrid";
import { SectionContainer } from "@sentrei/molecules/landing/SectionContainer";
import { SectionText } from "@sentrei/molecules/landing/SectionText";
import useTranslation from "next-translate/useTranslation";

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
