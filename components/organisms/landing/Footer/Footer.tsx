import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "@sentrei/atoms/landing/Logo";
import { SOCIAL_LINKS } from "@sentrei/const";
import * as React from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.300", "gray.700"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.300", "gray.700"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Logo />
      </Flex>
      <Box borderColor={useColorModeValue("gray.200", "gray.700")}>
        <Container
          as={Stack}
          maxW="6xl"
          pt={4}
          pb={8}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2020 Sentrei, Inc. All rights reserved.</Text>
          <Stack direction="row" spacing={6}>
            <Button
              as="a"
              href={SOCIAL_LINKS.GITHUB}
              target="__blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Button>
            <Button
              as="a"
              href={SOCIAL_LINKS.DISCORD}
              target="__blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </Button>
            <Button
              as="a"
              href={SOCIAL_LINKS.TWITTER}
              target="__blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
