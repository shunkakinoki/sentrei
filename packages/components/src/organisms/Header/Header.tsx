import {
  chakra,
  Flex,
  Box,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaDiscord, FaGithub, FaMoon, FaSun } from "react-icons/fa";

import { Logo } from "@sentrei/components/atoms/Logo";

export const Header = () => {
  const SwitchIcon = mode(FaMoon, FaSun);
  const { toggleColorMode } = useColorMode();

  return (
    <chakra.header
      shadow="sm"
      transition="box-shadow 0.3s"
      pos="fixed"
      top="0"
      bg="transparent"
      zIndex="3"
      left="0"
      right="0"
      width="full"
      css={{
        backdropFilter: "saturate(180%) blur(6px)",
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
            color="gray.400"
          >
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
              <Link
                isExternal
                aria-label="Go to Sentrei GitHub page"
                href="https://github.com/sentrei/sentrei"
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
                href="https://discord.gg/hTn8YU8B"
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
