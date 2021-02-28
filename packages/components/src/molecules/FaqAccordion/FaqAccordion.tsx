import {
  Container,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import type { FC, VFC } from "react";

type FacAccordionItemProps = {
  title: string;
  children: string;
};

const FaqAccordionItem: FC<FacAccordionItemProps> = ({ children, title }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Text fontWeight="medium" fontSize="lg">
              {title}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Text fontWeight="light" fontSize="md">
          {children}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export const FaqAccordion: VFC = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="3xl">
      <Accordion allowMultiple>
        <FaqAccordionItem title={t("index:faq.accordion.beta.question")}>
          {t("index:faq.accordion.beta.answer")}
        </FaqAccordionItem>
        <FaqAccordionItem title={t("index:faq.accordion.usage.question")}>
          {t("index:faq.accordion.usage.answer")}
        </FaqAccordionItem>
        <FaqAccordionItem title={t("index:faq.accordion.open.question")}>
          {t("index:faq.accordion.open.answer")}
        </FaqAccordionItem>
      </Accordion>
    </Container>
  );
};
