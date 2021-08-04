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
      font-size: 120px;
      margin: 75px 0;
    }

    h2 {
      font-size: 60px;
      margin-top: 25px;
    }

    h3 {
      margin-top: 40px;
      text-align: right;
      font-size: 30px;
      color: ${colours.gray};
    }
  `;
};

const Component: LayoutComponent = ({ config }) => {
  const title = config.Title;
  const author = config.Author;
  const url = config.Url;

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
        {url && <h3>{url}</h3>}
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
      default: "The Jamstack Backend",
      placeholder: "Big text",
    },
    {
      name: "Author",
      type: "text",
      default: "Shun",
      placeholder: "Big Author",
    },
    {
      name: "Url",
      type: "text",
      placeholder: "https://og.sentrei.com",
    },
  ],
  Component,
  getCSS,
};
