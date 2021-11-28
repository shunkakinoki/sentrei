import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith(`/docs`)) {
    return;
  }

  if (pathname === "/favicon.svg") {
    return NextResponse.rewrite("/docs/favicon.svg");
  }
};
