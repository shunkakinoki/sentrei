import {
  Box,
  Button,
  Heading,
  Stack,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";

import useTranslation from "next-translate/useTranslation";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { Announce } from "@/components/atoms/Announce";
import { Blur } from "@/components/atoms/Blur";
import { Check } from "@/components/atoms/Check";
import { Gradient } from "@/components/atoms/Gradient";
import { SectionContainer } from "@/components/molecules/SectionContainer";
import { postWaitlist } from "@/utils";

export const Hero = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      postWaitlist(email);
    }
  };

  return (
    <SectionContainer>
      <Box
        position={"relative"}
        maxW={{ base: "xl", sm: "3xl", md: "8xl" }}
        mt="16"
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
            maxW="xl"
            mx="auto"
            letterSpacing="tight"
          >
            <Box
              as="span"
              bgGradient={useColorModeValue(
                "linear(to-r, purple.600, blue.500, green.300)",
                "linear(to-r, purple.500, blue.400, green.400)",
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
              bgGradient={useColorModeValue(
                "linear(to-r, pink.400, purple.400, red.400)",
                "linear(to-r, pink.400, purple.500, red.600)",
              )}
              color={useColorModeValue(
                { base: "gray.600", md: "gray.700" },
                { base: "gray.50", md: "gray.100" },
              )}
              range={[20, 44]}
              fontSize="lg"
              fontWeight="medium"
            >
              {t("index:hero.description.edge")}
            </Gradient>
            <Gradient
              bgGradient={useColorModeValue(
                {
                  base: "linear(to-r, pink.500, red.500, yellow.500)",
                  md: "linear(to-r, pink.500, red.500, yellow.500)",
                },
                {
                  base: "linear(to-r, pink.500, red.500, yellow.500)",
                  md: "linear(to-r, pink.600, red.600, yellow.500)",
                },
              )}
              color={useColorModeValue(
                { base: "gray.600", md: "gray.700" },
                { base: "gray.10", md: "gray.200" },
              )}
              range={[53, 73]}
              fontSize="lg"
              fontWeight="medium"
            >
              {t("index:hero.description.dx")}
            </Gradient>
          </Box>
        </Box>
        <Box mt="6" maxW="2xl" mx="auto">
          <form onSubmit={handleSubmit}>
            <Stack direction={{ base: "column", md: "row" }}>
              <Box flex="1">
                <FormLabel srOnly htmlFor="email">
                  {t("index:hero.form.email")}
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  size="lg"
                  fontSize="md"
                  bg="white"
                  value={email}
                  _placeholder={{ color: "gray.400" }}
                  color="gray.900"
                  placeholder={t("index:hero.form.email")}
                  focusBorderColor="blue.200"
                  onChange={handleChange}
                />
              </Box>
              <Button
                type="submit"
                size="lg"
                colorScheme="purple"
                px="10"
                fontSize="md"
              >
                {t("index:hero.form.invite")}
              </Button>
            </Stack>
          </form>
        </Box>
        <Stack
          spacing={{ base: "3", md: "6" }}
          direction={{ base: "column", md: "row" }}
          mt="6"
          justify="center"
          align="center"
        >
          <Check>{t("index:hero.check.priority")}</Check>
          <Check>{t("index:hero.check.notified")}</Check>
          <Check>{t("index:hero.check.spam")}</Check>
        </Stack>
      </Box>
      <Blur position={"absolute"} top={-10} left={-10} />
      <Blur
        display={{ base: "none", md: "block" }}
        position={"absolute"}
        transform="scale(-1,-1)"
        top={-10}
        right={-10}
      />
    </SectionContainer>
  );
};
