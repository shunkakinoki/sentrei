import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { SOCIAL_LINKS } from "@sentrei/const";
import useTranslation from "next-translate/useTranslation";

import * as React from "react";

export const FounderTestimonial = () => {
  const { t } = useTranslation();

  return (
    <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ base: "6", md: "8" }}>
      <Flex
        align="center"
        direction="column"
        maxW="5xl"
        mx="auto"
        textAlign="center"
      >
        <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="semibold">
          {t("index:founder.testimonial.text")}
        </Text>
        <Box mt="8">
          <Img
            mx="auto"
            objectFit="cover"
            w="16"
            h="16"
            rounded="full"
            src={SOCIAL_LINKS.AVATAR}
          />
          <Box mt="3">
            <Text as="cite" fontStyle="normal" fontWeight="bold">
              {t("index:founder.testimonial.name")}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {t("index:founder.testimonial.position")}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
