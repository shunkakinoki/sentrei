import {
  chakra,
  Flex,
  Box,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "@sentrei/atoms/landing/Logo";
import { SOCIAL_LINKS } from "@sentrei/const";
import { useViewportScroll } from "framer-motion";
import NextLink from "next/link";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { FaDiscord, FaGithub, FaMoon, FaSun } from "react-icons/fa";

export const Header = () => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { toggleColorMode } = useColorMode();
  const ref = useRef<HTMLHeadingElement>(null);
  const [y, setY] = useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

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
      css={{
        backdropFilter: y > height ? "saturate(180%) blur(6px)" : undefined,
      }}
    >
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
          <Flex align="center">
            <NextLink passHref href="/">
              <chakra.a display="block" aria-label="Sentrei, Back to homepage">
                <Logo display={{ base: "none", md: "block" }} />
                <Box minW="3rem" display={{ base: "block", md: "none" }}>
                  <Logo />
                </Box>
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
              <Link
                isExternal
                aria-label="Go to Sentrei GitHub page"
                href={SOCIAL_LINKS.GITHUB}
              >
                <Icon
                  as={FaGithub}
                  display="block"
                  transition="color 0.3s"
                  w="5"
                  h="5"
                  _hover={{ color: "gray.600" }}
                />
              </Link>
              <Link
                isExternal
                aria-label="Go to Sentrei Discord page"
                href={SOCIAL_LINKS.DISCORD}
              >
                <Icon
                  as={FaDiscord}
                  display="block"
                  transition="color 0.3s"
                  w="5"
                  h="5"
                  _hover={{ color: "gray.600" }}
                />
              </Link>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label="Switch dark mode"
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              icon={<SwitchIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  );
};
