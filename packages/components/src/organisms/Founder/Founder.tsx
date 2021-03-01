import { useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

import { FounderTestimonial } from "@sentrei/components/molecules/FounderTestimonial";
import { SectionContainer } from "@sentrei/components/molecules/SectionContainer";
import { SectionText } from "@sentrei/components/molecules/SectionText";

export const Founder = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer bg={useColorModeValue("gray.100", undefined)}>
      <SectionText
        flag={t("index:founder.section.flag")}
        title={t("index:founder.section.title")}
        subtitle={t("index:founder.section.subtitle")}
        range={[3, 14]}
        bgGradient="linear(to-r, yellow.400, green.400, blue.300)"
      />
      <FounderTestimonial />
    </SectionContainer>
  );
};
