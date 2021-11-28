import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const hostname = req.headers.get("host");

  const path = req.nextUrl.href.split("/")[1];

  if (["favicon.svg"].includes(path)) {
    return NextResponse.redirect("/docs/favicon.svg");
  }

  if (["api", "docs"].includes(path)) {
    return;
  }

  if (
    hostname.includes("vercel.app") ||
    hostname === "docs.sentrei.com" ||
    (process.env.NODE_ENV !== "production" && hostname === "localhost:3000")
  ) {
    return NextResponse.redirect("/docs");
  }
};

export default middleware;
