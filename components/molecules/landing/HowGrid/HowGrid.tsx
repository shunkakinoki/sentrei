import { Container, Grid } from "@chakra-ui/react";
import { How } from "@sentrei/atoms/landing/How";
import useTranslation from "next-translate/useTranslation";
import type { VFC } from "react";
import * as React from "react";
import { FcUnlock, FcDataEncryption, FcStatistics } from "react-icons/fc";

export const HowGrid: VFC = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="7xl">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={10}
        px={{ md: 12 }}
      >
        <How icon={FcStatistics} title={t("index:how.grid.develop.title")}>
          {t("index:how.grid.develop.description")}
        </How>
        <How icon={FcUnlock} title={t("index:how.grid.preview.title")}>
          {t("index:how.grid.preview.description")}
        </How>
        <How icon={FcDataEncryption} title={t("index:how.grid.managed.title")}>
          {t("index:how.grid.managed.description")}
        </How>
      </Grid>
    </Container>
  );
};
