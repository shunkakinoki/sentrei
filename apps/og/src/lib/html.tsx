import { renderToString } from "react-dom/server";

import { layouts } from "@sentrei/og/layouts";
import type {
  IConfig,
  ILayoutConfig,
  LayoutComponent,
} from "@sentrei/og/types";

const NotImplemented: LayoutComponent = ({ config }) => {
  return <h1 style={{ fontSize: 100 }}>{config.layoutName} not implemented</h1>;
};

export const getHtml = (config: IConfig & ILayoutConfig) => {
  const layout = layouts.find(l => {
    return l.name === config.layoutName;
  });

  const rendered = renderToString(
    layout?.Component != null ? (
      <layout.Component config={config} />
    ) : (
      <NotImplemented config={config} />
    ),
  );

  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <body>
      ${rendered}
    </body>
</html>`;
};
