import { useColorModeValue } from "@chakra-ui/react";
import { HowGrid } from "@sentrei/molecules/landing/HowGrid";
import { SectionContainer } from "@sentrei/molecules/landing/SectionContainer";
import { SectionText } from "@sentrei/molecules/landing/SectionText";
import useTranslation from "next-translate/useTranslation";

import * as React from "react";

export const How = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer bg={useColorModeValue("gray.50", undefined)}>
      <SectionText
        flag={t("index:how.section.flag")}
        title={t("index:how.section.title")}
        subtitle={t("index:how.section.subtitle")}
        range={[22, 26]}
        bgGradient="linear(to-r, blue.400, purple.400, teal.300)"
      />
      <HowGrid />
    </SectionContainer>
  );
};
