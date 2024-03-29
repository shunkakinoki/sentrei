import type { NextApiRequest, NextApiResponse } from "next";

import { getIP } from "@sentrei/app/lib/getIP";

import { IP_RULES } from "@sentrei/app/lib/rules/constants";
import { upstashRest } from "@sentrei/app/lib/upstash";

const IP_REGEX =
  /^((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;

export const ip = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "PUT": {
        const ip = req.body.ip?.trim();
        const action = req.body.action?.trim();

        if (!IP_REGEX.test(ip) || action !== "block") {
          return res
            .status(400)
            .json({ error: { message: "Invalid request" } });
        }

        const value = JSON.stringify({ action });
        const data = await upstashRest(["HSET", IP_RULES, ip, value]);
        return res.status(200).json({ done: data.result === 1 });
      }
      case "GET": {
        const { result } = await upstashRest(["HGETALL", IP_RULES]);
        const rules = [];
        const myIp = getIP(req);

        for (let i = 0; i < result.length; i += 2) {
          rules.push([result[i], JSON.parse(result[i + 1])]);
        }

        return res.status(200).json({ myIp, rules });
      }
      case "DELETE": {
        const { ip } = req.query;

        if (!ip || typeof ip !== "string") {
          return res
            .status(400)
            .json({ error: { message: "Invalid request" } });
        }

        const data = await upstashRest(["HDEL", IP_RULES, ip.trim()]);
        return res.status(200).json({ done: data.result === 1 });
      }
      default:
        res.status(405).json({
          error: { message: "Method not allowed." },
        });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: { message: `An error ocurred, ${err}` },
    });
  }
};

export default ip;
