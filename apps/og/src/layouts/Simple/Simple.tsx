import { Markdown } from "@sentrei/og/components/Markdown";
import { css } from "@sentrei/og/lib";
import type { ILayout, LayoutComponent } from "@sentrei/og/types";

const getCSS = (): string => {
  return css`
    body {
      font-size: 200px;
      color: white;
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
