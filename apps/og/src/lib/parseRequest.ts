import type { NextApiRequest } from "next";

import { DEFAULT_CONFIG } from "@sentrei/og/const/config";
import { getLayoutConfigFromQuery } from "@sentrei/og/layouts";
import type { IConfig, ILayoutConfig } from "@sentrei/og/types";

export const parseRequest = (req: NextApiRequest): IConfig & ILayoutConfig => {
  const config: IConfig = {
    ...DEFAULT_CONFIG,
    ...req.query,
  };

  const layoutConfig = getLayoutConfigFromQuery(config.layoutName, req.query);

  return {
    ...config,
    ...layoutConfig,
  };
};
