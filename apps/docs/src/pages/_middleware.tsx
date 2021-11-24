import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const hostname = req.headers.get("host");

  if (hostname !== process.env.ROOT_URL) {
    return NextResponse.rewrite("/docs");
  }
};

export default middleware;
