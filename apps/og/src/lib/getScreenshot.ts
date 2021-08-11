import type { Page } from "puppeteer-core";
import * as core from "puppeteer-core";

import { OG_HEIGHT, OG_WIDTH } from "@sentrei/og/const/og";
import type { FileType } from "@sentrei/og/types";

let _page: Page | null;

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

const getPage = async (isDev: boolean, options: Options): Promise<Page> => {
  if (_page) {
    return _page;
  }
  const browser = await core.launch(options);
  _page = await browser.newPage();
  return _page;
};

export const getScreenshot = async (
  html: string,
  type: FileType,
  isDev: boolean,
  options: Options,
): Promise<string | void | Buffer> => {
  const page = await getPage(isDev, options);
  await page.setViewport({ width: OG_WIDTH, height: OG_HEIGHT });
  await page.setContent(html);
  const file = await page.screenshot({ type });
  return file;
};
