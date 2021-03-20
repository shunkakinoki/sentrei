import { useColorModeValue } from "@chakra-ui/react";

import { FaqAccordion } from "@sentrei/molecules/landing/FaqAccordion";
import { SectionContainer } from "@sentrei/molecules/landing/SectionContainer";
import { SectionText } from "@sentrei/molecules/landing/SectionText";
import useTranslation from "next-translate/useTranslation";

import * as React from "react";

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
