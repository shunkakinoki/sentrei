import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  StackDivider,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import type { FC, VFC } from "react";

import * as React from "react";

export type StatProps = BoxProps & {
  title: string;
  value: string;
};

export const Stat: FC<StatProps> = ({ title, value, ...rest }) => (
  <Stack
    direction="column-reverse"
    maxW="12rem"
    mx="auto"
    as="dl"
    textAlign="center"
    {...rest}
  >
    <Box
      as="dt"
      color={useColorModeValue("gray.600", "whiteAlpha.700")}
      fontWeight="medium"
    >
      {title}
    </Box>
    <Box
      as="dd"
      fontSize="6xl"
      fontWeight="extrabold"
      color={useColorModeValue("purple.500", "purple.300")}
    >
      {value}
    </Box>
  </Stack>
);

export const StatStack: VFC = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="3xl">
      <Stack
        shadow={useColorModeValue("xl", undefined)}
        p={4}
        spacing="8"
        direction={{ base: "column", md: "row" }}
        divider={<StackDivider />}
      >
        <Stat
          title={t("index:stats.stack.database.title")}
          value={t("index:stats.stack.database.value")}
        />
        <Stat
          title={t("index:stats.stack.edge.title")}
          value={t("index:stats.stack.edge.value")}
        />
        <Stat
          title={t("index:stats.stack.function.title")}
          value={t("index:stats.stack.function.value")}
        />
      </Stack>
    </Container>
  );
};
