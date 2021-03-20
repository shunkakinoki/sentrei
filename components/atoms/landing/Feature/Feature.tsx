import {
  Box,
  Flex,
  Icon,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { ComponentProps } from "react";
import * as React from "react";

export interface FeatureProps {
  title: string;
  children: string;
  icon: ComponentProps<typeof Icon>["as"];
}

export const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props;
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      rounded="12px"
      shadow="base"
      p="30px"
      {...props}
    >
      <Flex
        rounded="full"
        w="12"
        h="12"
        bg={useColorModeValue("teal.300", "teal.200")}
        align="center"
        justify="center"
      >
        <Icon fontSize="24px" color="white" as={icon} />
      </Flex>
      <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
        {title}
      </Heading>
      <Text fontSize="lg" opacity={0.7}>
        {children}
      </Text>
    </Box>
  );
};
