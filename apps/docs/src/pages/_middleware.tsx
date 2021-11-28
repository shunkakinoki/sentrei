import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const path = req.nextUrl.href.split("/")[1];

  if (path === "") {
    return NextResponse.redirect("/docs");
  }

  if (path === "favicon.svg") {
    return NextResponse.redirect("/docs/favicon.svg");
  }
};

export default middleware;
