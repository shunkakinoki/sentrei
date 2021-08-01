import type { NextApiHandler } from "next";

import { getHtml, parseRequest } from "@sentrei/og/lib";

// eslint-disable-next-line @typescript-eslint/require-await
const html: NextApiHandler = async (req, res) => {
  try {
    const config = parseRequest(req);
    console.log(`\n\n\n--- /api/html ---\nCONFIG: ${config}\n\n\n`);
    const html = getHtml(config);
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(e);
  }
};

export default html;
