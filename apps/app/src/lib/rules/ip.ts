// eslint-disable-next-line @next/next/no-server-import-in-page
import type { NextRequest } from "next/server";

import { IP_RULES } from "./constants";

import { getIP } from "@sentrei/app/lib/getIP";
import { upstashRest } from "@sentrei/app/lib/upstash";

export const blockedIp = async (request: NextRequest) => {
  try {
    const { result } = await upstashRest(["HGET", IP_RULES, getIP(request)]);

    if (!result) return false;

    const data = JSON.parse(result);

    return data.action === "block";
  } catch (err) {
    console.error("IP validation failed:", err);
    return false;
  }
};
