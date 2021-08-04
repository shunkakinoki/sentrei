import { Markdown } from "@sentrei/og/components/Markdown";
import { colourThemes, defaultTheme } from "@sentrei/og/const/colour";
import { css } from "@sentrei/og/lib/css";
import { getTheme } from "@sentrei/og/lib/getTheme";
import type { ILayout, LayoutComponent, GetCSSFn } from "@sentrei/og/types";

const getCSS: GetCSSFn = config => {
  const theme = getTheme(config);
  const colours = colourThemes[theme];

  console.log(colours);

  return css`
    body {
      color: ${colours.fg};
      background: ${colours.bg};
    }

    h1 {
      font-size: 100px;
      margin: 75px 0;
    }

    h2 {
      font-size: 50px;
      margin-top: 25px;
    }
  `;
};

const Component: LayoutComponent = ({ config }) => {
  const title = config.Title;
  const author = config.Author;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1>
        <Markdown>{title}</Markdown>
      </h1>
      <h2 style={{ display: "flex" }}>
        <Markdown style={{ fontWeight: 400 }}>Written by&nbsp;</Markdown>
        <Markdown>{author}</Markdown>
      </h2>
    </div>
  );
};

export const Blog: ILayout = {
  name: "Blog",
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
      default: "Self-hosted website analytics",
      placeholder: "Big text",
    },
    {
      name: "Author",
      type: "text",
      default: "Shun",
      placeholder: "Big Author",
    },
  ],
  Component,
  getCSS,
};
