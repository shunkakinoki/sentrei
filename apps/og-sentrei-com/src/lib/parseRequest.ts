import type { NextApiRequest } from "next";

import { DEFAULT_CONFIG } from "@sentrei/og-sentrei-com/const/config";
import { getLayoutConfigFromQuery } from "@sentrei/og-sentrei-com/layouts";
import type { IConfig, ILayoutConfig } from "@sentrei/og-sentrei-com/types";

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
