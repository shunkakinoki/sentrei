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
    <>
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
    </>
  );
};
