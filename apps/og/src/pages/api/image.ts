import type { NextApiHandler } from "next";

import { getHtml } from "@sentrei/og/lib/html";

import { parseRequest } from "@sentrei/og/lib/parser";

// eslint-disable-next-line @typescript-eslint/require-await
const handler: NextApiHandler = async (req, res) => {
  console.log(req);
  try {
    const config = parseRequest(req);
    console.log("\n\n\n--- /api/html ---\n\n\n");
    console.log("CONFIG", config);

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

export default handler;
