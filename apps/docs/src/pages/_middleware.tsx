import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const hostname = req.headers.get("host");
  const path = req.nextUrl.href.split("/")[1];

  console.log(`hostname: ${hostname}`);
  console.log(`path: ${path}`);
  console.log(hostname.endsWith("vercel.app"));

  if (path === "favicon.svg") {
    return NextResponse.redirect("/docs/favicon.svg");
  }

  if (["api", "docs"].includes(path)) {
    return;
  } else {
    if (
      hostname.endsWith("vercel.app") ||
      hostname === "docs.sentrei.com" ||
      (process.env.NODE_ENV !== "production" && hostname === "localhost:3000")
    ) {
      return NextResponse.redirect("/docs");
    }
  }
};

export default middleware;
