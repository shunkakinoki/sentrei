import type { NextApiHandler } from "next";

import { getHtml, parseRequest, getScreenshot } from "@sentrei/og/lib";

const isDev = process && process.env.NODE_ENV === "development";

const handler: NextApiHandler = async (req, res) => {
  try {
    const config = parseRequest(req);
    console.log(`\n\n\n--- /api/image---\nCONFIG: ${config}\n\n\n`);
    const html = getHtml(config);
    const { fileType } = config;
    const file = await getScreenshot(html, fileType, isDev);
    res.statusCode = 200;
    res.setHeader("Content-Type", `image/${fileType}`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`,
    );
    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(e);
  }
};

export default handler;
