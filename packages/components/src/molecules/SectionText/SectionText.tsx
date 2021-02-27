import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import type { ComponentProps, FC } from "react";

import { Gradient } from "@sentrei/components/atoms/Gradient";

export type SectionTextProps = {
  flag: string;
  title: string;
  subtitle: string;
  bgGradient: ComponentProps<typeof Gradient>["bgGradient"];
  range: ComponentProps<typeof Gradient>["range"];
};

export const SectionText: FC<SectionTextProps> = ({
  flag,
  title,
  subtitle,
  bgGradient,
  range,
}) => (
  <Box
    maxW="3xl"
    mx="auto"
    px={{ base: "6", lg: "8" }}
    py={{ base: "16", sm: "20" }}
    textAlign="center"
  >
    <Center>
      <Text
        fontWeight="semibold"
        textTransform="uppercase"
        fontSize="md"
        color={useColorModeValue("purple.800", "purple.300")}
        letterSpacing="wide"
      >
        {flag}
      </Text>
    </Center>
    <Gradient
      bgGradient={bgGradient}
      range={range}
      mt={2}
      fontSize={{ base: "4xl", md: "6xl" }}
      fontWeight="extrabold"
    >
      {title}
    </Gradient>
    <Text fontSize={{ base: "md", md: "lg" }} mt={1} colorScheme="gray">
      {subtitle}
    </Text>
  </Box>
);
