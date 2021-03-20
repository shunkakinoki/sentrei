import {
  Center,
  Icon,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { ComponentProps, FC } from "react";
import * as React from "react";

export interface HowProps {
  title: string;
  children: string;
  icon: ComponentProps<typeof Icon>["as"];
}

export const How: FC<HowProps> = ({ title, children, icon }) => {
  return (
    <Stack>
      <Center>
        <Flex
          w={16}
          h={16}
          align="center"
          justify="center"
          color="white"
          rounded="full"
          bg="gray.100"
          mb={1}
        >
          <Icon as={icon} w={10} h={10} />
        </Flex>
      </Center>
      <Text
        align="center"
        fontSize="2xl"
        fontWeight="semibold"
        mb="4"
        lineHeight="1"
      >
        {title}
      </Text>
      <Text color={useColorModeValue("gray.900", "white")}>{children}</Text>
    </Stack>
  );
};
