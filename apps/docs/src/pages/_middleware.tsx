import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const { href } = req.nextUrl;

  if (href === "/") {
    return NextResponse.rewrite("/docs");
  }

  if (href === "/favicon.svg") {
    return NextResponse.rewrite("/docs/favicon.svg");
  }
};
