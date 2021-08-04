import { Markdown } from "@sentrei/og/components/Markdown";
import { css } from "@sentrei/og/lib/css";
import type { ILayout, LayoutComponent, GetCSSFn } from "@sentrei/og/types";

const getCSS: GetCSSFn = () => {
  return css`
    body {
      font-size: 200px;
      color: rgb(255, 255, 255);
      background: linear-gradient(to bottom right, skyblue, deeppink);
    }
  `;
};

const Component: LayoutComponent = ({ config }) => {
  return <Markdown>{config.Text}</Markdown>;
};

export const Simple: ILayout = {
  name: "Simple",
  properties: [{ name: "Text", type: "text", default: "**Hello** _World_" }],
  Component,
  getCSS,
};
