import { Markdown } from "@sentrei/og/components/Markdown";
import type { ILayout, LayoutComponent } from "@sentrei/og/types";

const Component: LayoutComponent = ({ config }) => {
  return <Markdown>{config.Text}</Markdown>;
};

export const simple: ILayout = {
  name: "Simple",
  properties: [{ name: "Text", type: "text", default: "**Hello** _World_" }],
  Component,
};
