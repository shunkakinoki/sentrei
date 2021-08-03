import chrome from "chrome-aws-lambda";
import type { Page } from "puppeteer-core";
import * as core from "puppeteer-core";

import { OG_HEIGHT, OG_WIDTH } from "@sentrei/og/const";
import type { FileType } from "@sentrei/og/types";

let _page: Page | null;

const exePath =
  process.platform === "win32"
    ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    : process.platform === "linux"
    ? "/usr/bin/google-chrome"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

export const getOptions = async (isDev: boolean) => {
  let options: Options;
  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }

  return options;
};

const getPage = async (isDev: boolean) => {
  if (_page) {
    return _page;
  }
  const options = await getOptions(isDev);
  const browser = await core.launch(options);
  _page = await browser.newPage();
  return _page;
};

export const getScreenshot = async (
  html: string,
  type: FileType,
  isDev: boolean,
) => {
  const page = await getPage(isDev);
  await page.setViewport({ width: OG_WIDTH, height: OG_HEIGHT });
  await page.setContent(html);
  const file = await page.screenshot({ type });
  return file;
};
