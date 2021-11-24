import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.rewrite("/docs");
  }
};

export default middleware;
