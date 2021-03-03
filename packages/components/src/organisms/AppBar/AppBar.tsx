import {
  chakra,
  Flex,
  Box,
  Stack,
  HStack,
  Container,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import { Logo } from "@sentrei/components/atoms/Logo";
import { ProfileMenu } from "@sentrei/components/molecules/ProfileMenu";
import { TabLink } from "@sentrei/components/molecules/TabLink";

export const AppBar = () => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { toggleColorMode } = useColorMode();
  const ref = useRef<HTMLHeadingElement>(null);
  const [y, setY] = useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  const { t } = useTranslation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "xl" : undefined}
      transition="box-shadow 0.3s"
      pos="fixed"
      top="0"
      bg="transparent"
      zIndex="3"
      left="0"
      right="0"
      width="full"
    >
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
          <Flex align="center">
            <NextLink passHref href="/">
              <chakra.a display="block" aria-label="Sentrei, Back to homepage">
                <Logo />
              </chakra.a>
            </NextLink>
          </Flex>
          <Flex
            justify="flex-end"
            w="100%"
            maxW="824px"
            align="center"
            color={useColorModeValue(
              y > height ? "gray.600" : "gray.700",
              y > height ? "gray.300" : "gray.200",
            )}
          >
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
              <Link aria-label="Go to Sentrei Support page">Support</Link>
            </HStack>
            <ProfileMenu />
            <IconButton
              size="md"
              fontSize="lg"
              aria-label="Switch dark mode"
              variant="ghost"
              color="current"
              ml={{ base: "3", md: "6" }}
              icon={<SwitchIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </chakra.div>
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <Box shadow="sm">
          <Container maxW="7xl">
            <Stack direction="row" spacing="4">
              <TabLink aria-current="page">
                {t("common:appBar.tab.overview")}
              </TabLink>
              <TabLink> {t("common:appBar.tab.analytics")}</TabLink>
              <TabLink> {t("common:appBar.tab.authentication")}</TabLink>
            </Stack>
          </Container>
        </Box>
      </chakra.div>
    </chakra.header>
  );
};
