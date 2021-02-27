import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

import { Button } from "@sentrei/components/atoms/Button";
import { Logo } from "@sentrei/components/atoms/Logo";

export function Footer() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        spacing={4}
        justify="center"
        align="center"
      >
        <Logo />
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2020 Sentrei, Inc. All rights reserved.</Text>
          <Stack direction="row" spacing={6}>
            <Button label="Twitter" href="https://twitter.com/SentreiHQ">
              <FaTwitter />
            </Button>
            <Button label="YouTube" href="#">
              <FaDiscord />
            </Button>
            <Button label="Github" href="https://github.com/sentrei/sentrei">
              <FaGithub />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
