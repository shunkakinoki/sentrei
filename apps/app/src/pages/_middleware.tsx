import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("docs")) {
    return NextResponse.rewrite("docs.sentrei.com");
  }

  if (pathname.startsWith("home")) {
    return NextResponse.rewrite("home.sentrei.com");
  }
};

export default middleware;
