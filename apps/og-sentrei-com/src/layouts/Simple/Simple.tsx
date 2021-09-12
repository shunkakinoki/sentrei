import { Markdown } from "@sentrei/og-sentrei-com/components/Markdown";
import { css } from "@sentrei/og-sentrei-com/lib/css";
import type {
  ILayout,
  LayoutComponent,
  GetCSSFn,
} from "@sentrei/og-sentrei-com/types";

const getCSS: GetCSSFn = () => {
  return css`
    body {
      font-size: 200px;
      color: #ffffff;
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
