import type { NextRequest } from "next/server";

import { tokenRateLimit } from "@sentrei/app/lib/api/keys";

export const index = async (req: NextRequest) => {
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

export default index;
