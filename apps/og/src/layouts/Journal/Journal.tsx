/* eslint-disable tailwindcss/no-custom-classname */

import { colourThemes, defaultTheme } from "@sentrei/og/const/colour";
import { css } from "@sentrei/og/lib/css";
import { getTheme } from "@sentrei/og/lib/getTheme";
import type { ILayout, LayoutComponent, GetCSSFn } from "@sentrei/og/types";

const getCSS: GetCSSFn = config => {
  const theme = getTheme(config);
  const colours = colourThemes[theme];

  return css`
    body {
      background: linear-gradient(red, transparent),
        linear-gradient(to top left, lime, transparent),
        linear-gradient(to top right, blue, transparent);
      background-blend-mode: screen;
    }

    .top {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      color: ${colours.fg};
      padding: 80px;
    }

    h1 {
      margin: 0;
      text-align: right;
      font-size: 1.5em;
      font-weight: 800;
      max-width: 1600px;
    }

    .date {
      margin-top: 45px;
      text-align: right;
      font-size: 80px;
      color: ${colours.pink};
    }

    .username {
      margin-top: 40px;
      text-align: right;
      font-size: 45px;
      color: ${colours.gray};
    }
  `;
};

const Component: LayoutComponent = ({ config }) => {
  const title = config.Title;
  const date = config.Date;
  const username = config.Username;

  return (
    <div className="top">
      <div className="content">
        <h1>{title}</h1>
        {date && <div className="date">{date}</div>}
        {username && <div className="username">@{username}</div>}
      </div>
    </div>
  );
};

export const Journal: ILayout = {
  name: "Journal",
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
      default: "My personal journal",
      placeholder: "Journal title",
    },
    {
      name: "Date",
      type: "text",
      default: "2021/01/01",
      placeholder: "1998/10/02",
    },
    {
      name: "Username",
      type: "text",
      placeholder: "shunkakinoki",
    },
    {
      name: "Icon",
      type: "select",
      options: ["Show", "Hide"],
      default: "Show",
    },
  ],
  getCSS,
  Component,
};
