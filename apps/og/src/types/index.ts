import type { ComponentType } from "react";

export type FileType = "png" | "jpeg";

export interface IConfig {
  fileType: FileType;
  layoutName: string;
}

export interface BaseLayoutProperty {
  name: string;
  description?: string;
}

export type ILayoutValue = string;
export type ILayoutConfig = Record<string, ILayoutValue>;

export type LayoutComponent = ComponentType<{
  config: IConfig & ILayoutConfig;
}>;

export type ILayoutProperty = BaseLayoutProperty &
  (
    | {
        type: "text";
        default?: string;
        placeholder?: string;
      }
    | {
        type: "number";
        default?: string;
        placeholder?: string;
      }
    | {
        type: "select";
        options: string[];
        default?: string;
      }
  );

export interface ILayout {
  name: string;
  properties: ILayoutProperty[];
  Component?: LayoutComponent;
}
