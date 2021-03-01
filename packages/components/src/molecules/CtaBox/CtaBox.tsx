import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import type { FC, VFC } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import {
  BsLightning,
  BsCloud,
  BsArrowRepeat,
  BsGrid3X3Gap,
} from "react-icons/bs";

interface CtaFeatureProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}

export const CtaFeature: FC<CtaFeatureProps> = ({ icon, title, children }) => (
  <Box>
    <Box color="blue.300" fontSize="2.5rem">
      {icon}
    </Box>
    <Stack mt="6">
      <Text as="h3" fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text
        pr="6"
        lineHeight="tall"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {children}
      </Text>
    </Stack>
  </Box>
);

export const CtaBox: VFC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box
        maxW={{ base: "xl", md: "6xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Stack
          spacing="10"
          direction={{ base: "column", lg: "row" }}
          align={{ base: "flex-start", lg: "center" }}
          justify="space-between"
        >
          <Heading
            size="2xl"
            lineHeight="short"
            fontWeight="extrabold"
            maxW={{ base: "unset", lg: "800px" }}
          >
            {t("index:cta.heading.title")}
          </Heading>
          <Button
            minW="240px"
            as="button"
            px="6"
            py="8"
            textTransform="uppercase"
            fontWeight="bold"
            transition="all 0.2s"
            rounded="lg"
            outline={0}
            colorScheme="twitter"
            _focus={{ shadow: "outline" }}
            _active={{ transform: "translateY(2px)" }}
            _hover={{ bg: "blue.700" }}
            w={{ base: "full", md: "auto" }}
          >
            {t("index:cta.heading.button")}
            <Box as={BiRightArrowAlt} ml="2" fontSize="lg" />
          </Button>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: "12", md: "8", lg: "2" }}
          mt={{ base: "12", md: "20" }}
        >
          <CtaFeature
            icon={<BsLightning />}
            title={t("index:cta.stack.cold.title")}
          >
            {t("index:cta.stack.cold.description")}
          </CtaFeature>
          <CtaFeature
            icon={<BsCloud />}
            title={t("index:cta.stack.edge.title")}
          >
            {t("index:cta.stack.edge.description")}
          </CtaFeature>
          <CtaFeature
            icon={<BsGrid3X3Gap />}
            title={t("index:cta.stack.database.title")}
          >
            {t("index:cta.stack.database.description")}
          </CtaFeature>
          <CtaFeature
            icon={<BsArrowRepeat />}
            title={t("index:cta.stack.integration.title")}
          >
            {t("index:cta.stack.integration.description")}
          </CtaFeature>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
