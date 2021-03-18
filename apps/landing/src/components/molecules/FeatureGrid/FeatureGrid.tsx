import { Container, Grid } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import type { VFC } from "react";
import {
  FcUnlock,
  FcDataEncryption,
  FcStatistics,
  FcMindMap,
  FcSportsMode,
  FcLibrary,
} from "react-icons/fc";

import { Feature } from "@/components/atoms/Feature";

export const FeatureGrid: VFC = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="7xl">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={10}
        px={{ md: 12 }}
      >
        <Feature
          icon={FcStatistics}
          title={t("index:feature.grid.analytics.title")}
        >
          {t("index:feature.grid.analytics.description")}
        </Feature>
        <Feature
          icon={FcUnlock}
          title={t("index:feature.grid.authentication.title")}
        >
          {t("index:feature.grid.authentication.description")}
        </Feature>
        <Feature
          icon={FcDataEncryption}
          title={t("index:feature.grid.database.title")}
        >
          {t("index:feature.grid.database.description")}
        </Feature>
        <Feature icon={FcSportsMode} title={t("index:feature.grid.fast.title")}>
          {t("index:feature.grid.fast.description")}
        </Feature>
        <Feature icon={FcLibrary} title={t("index:feature.grid.fee.title")}>
          {t("index:feature.grid.fee.description")}
        </Feature>
        <Feature icon={FcMindMap} title={t("index:feature.grid.scale.title")}>
          {t("index:feature.grid.scale.description")}
        </Feature>
      </Grid>
    </Container>
  );
};
