import {
  Box,
  Heading,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import useTranslation from "next-translate/useTranslation";

import { HiPlay } from "react-icons/hi";
import { ImMagicWand } from "react-icons/im";

import { Announce } from "@sentrei/components/atoms/Announce";
import { Blur } from "@sentrei/components/atoms/Blur";
import { Button } from "@sentrei/components/atoms/Button";
import { Gradient } from "@sentrei/components/atoms/Gradient";
import { SectionContainer } from "@sentrei/components/molecules/SectionContainer";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <Box
        position={"relative"}
        maxW={{ base: "xl", sm: "3xl", md: "8xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Box textAlign="center">
          <Announce
            href="/"
            prefix={t("index:hero.announce.prefix")}
            title={t("index:hero.announce.title")}
          />
          <Heading
            as="h1"
            mt="4"
            fontWeight="extrabold"
            size="3xl"
            maxW="lg"
            mx="auto"
            letterSpacing="tight"
          >
            <Box
              as="span"
              bgGradient={mode(
                {
                  base: "linear(to-r, purple.400, blue.600, green.500)",
                  md: "linear(to-r, purple.600, blue.500, green.300)",
                },
                {
                  base: "linear(to-r, purple.200, blue.300, green.400)",
                  md: "linear(to-r, purple.500, blue.400, green.400)",
                },
              )}
              bgClip="text"
            >
              {t("index:hero.main")}
            </Box>
            <br />
            {t("index:hero.sub")}
          </Heading>
          <Box mt="4" maxW="4xl" mx="auto">
            <Gradient
              bgGradient={mode(
                {
                  base: "linear(to-r, pink.500, purple.700, red.600)",
                  md: "linear(to-r, pink.400, purple.400, red.400)",
                },
                {
                  base: "linear(to-r, pink.300, purple.300, red.300)",
                  md: "linear(to-r, pink.400, purple.500, red.600)",
                },
              )}
              color={mode(
                { base: "gray.900", md: "gray.800" },
                { base: "gray.50", md: "gray.100" },
              )}
              range={[20, 44]}
              fontSize="lg"
              fontWeight="medium"
            >
              {t("index:hero.description.1")}
            </Gradient>
            <Gradient
              bgGradient={mode(
                {
                  base: "linear(to-r, pink.500, red.500, yellow.500)",
                  md: "linear(to-r, pink.500, red.500, yellow.500)",
                },
                {
                  base: "linear(to-r, pink.500, red.500, yellow.500)",
                  md: "linear(to-r, pink.600, red.600, yellow.500)",
                },
              )}
              color={mode(
                { base: "gray.900", md: "gray.800" },
                { base: "gray.10", md: "gray.200" },
              )}
              range={[53, 73]}
              fontSize="lg"
              fontWeight="medium"
            >
              {t("index:hero.description.2")}
            </Gradient>
          </Box>
        </Box>
        <Stack
          justify="center"
          direction={{ base: "column", md: "row" }}
          mt="10"
          mb="20"
          spacing="4"
        >
          <Button
            href="/"
            size="lg"
            colorScheme="blue"
            px="8"
            _hover={mode({ bg: "blue.600" }, { bg: "blue.100" })}
            fontWeight="bold"
            fontSize="md"
            leftIcon={<Box as={ImMagicWand} fontSize="2xl" mr={1} />}
          >
            {t("index:hero.cta.start")}
          </Button>
          <Button
            size="lg"
            colorScheme="teal"
            px="8"
            _hover={mode({ bg: "teal.600" }, { bg: "teal.50" })}
            fontWeight="bold"
            fontSize="md"
            leftIcon={<Box as={HiPlay} fontSize="2xl" mr={1} />}
          >
            {t("index:hero.cta.demo")}
          </Button>
        </Stack>
      </Box>
      <Blur position={"absolute"} top={-10} left={-10} />
    </SectionContainer>
  );
};
