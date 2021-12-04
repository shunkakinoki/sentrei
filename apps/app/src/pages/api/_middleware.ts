// eslint-disable-next-line @next/next/no-server-import-in-page
import type { NextRequest } from "next/server";

import { tokenRateLimit } from "@sentrei/app/lib/api/keys";

export const middleware = async (req: NextRequest) => {
  // eslint-disable-next-line no-console
  console.log(req);
  if (req.nextUrl.pathname === "/api") {
    const res = await tokenRateLimit(req);
    if (res.status !== 200) {
      return res;
    }

    res.headers.set("content-type", "application/json");

    return new Response(JSON.stringify({ done: true }), {
      status: 200,
      headers: res.headers,
    });
  }
};
