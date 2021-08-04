import { Markdown } from "@sentrei/og/components/Markdown";
import { colourThemes, defaultTheme } from "@sentrei/og/const/colour";
import { css } from "@sentrei/og/lib/css";
import { getTheme } from "@sentrei/og/lib/getTheme";
import type { ILayout, LayoutComponent, GetCSSFn } from "@sentrei/og/types";

const getCSS: GetCSSFn = config => {
  const theme = getTheme(config);
  const colours = colourThemes[theme];

  return css`
    body {
      margin-left: 10px;
      margin-right: 10px;
      color: ${colours.fg};
      background: ${colours.bg};
    }

    h1 {
      margin-top: 120px;
      font-size: 160px;
    }

    h2 {
      margin-top: 120px;
      font-size: 60px;
    }
  `;
};

const Component: LayoutComponent = ({ config }) => {
  const title = config.Title;
  const subTitle = config["Sub Title"];

  // const logoSize = subTitle ? 180 : 240;

  return (
    <div>
      <h1>
        <Markdown>{title}</Markdown>
      </h1>

      {subTitle && (
        <h2>
          <Markdown>{subTitle}</Markdown>
        </h2>
      )}
    </div>
  );
};

export const Sentrei: ILayout = {
  name: "Sentrei",
  properties: [
    {
      name: "Theme",
      type: "select",
      options: ["Light", "Dark"],
      default: defaultTheme,
    },
    {
      name: "Title",
      type: "text",
      default: "Edge Jamstack Backend",
      placeholder: "Big text",
    },
    {
      name: "Sub Title",
      type: "text",
      default: "All in one edge serverless backend",
      placeholder: "Small text",
    },
  ],
  Component,
  getCSS,
};
