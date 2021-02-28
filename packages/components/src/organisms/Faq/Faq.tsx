import { useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

import { FaqAccordion } from "@sentrei/components/molecules/FaqAccordion";
import { SectionContainer } from "@sentrei/components/molecules/SectionContainer";
import { SectionText } from "@sentrei/components/molecules/SectionText";

export const Faq = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer bg={useColorModeValue("gray.50", undefined)}>
      <SectionText
        flag={t("index:faq.section.flag")}
        title={t("index:faq.section.title")}
        subtitle={t("index:faq.section.subtitle")}
        range={[0, 0]}
        bgGradient="linear(to-r, purple.400, blue.400, yellow.300)"
      />
      <FaqAccordion />
    </SectionContainer>
  );
};
