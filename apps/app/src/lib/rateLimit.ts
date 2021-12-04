import type { NextRequest } from "next/server";

export interface RateLimitContextBase {
  id: string;
  limit: number;
  timeframe: number;
  count: CountFn;
}

export interface RateLimitContext extends RateLimitContextBase {
  request: NextRequest;
  headers: readonly [string | null, string | null, string | null];
  onRateLimit: OnRateLimit;
}

export type RateLimitHandler = (
  // eslint-disable-next-line no-unused-vars
  request: NextRequest,
) => Promise<RateLimitResult> | RateLimitResult;

export type RateLimitResult =
  | (RateLimitContextBase & {
      request?: NextRequest;
      headers?: RateLimitHeaders;
      onRateLimit?: OnRateLimit;
    })
  | Response;

export type RateLimitHeaders =
  | null
  | string
  | readonly [string | null, string | null, string | null];

export type OnRateLimit = (
  // eslint-disable-next-line no-unused-vars
  context: RateLimitContext,
) => Response | Promise<Response>;

export type CountFn = (
  // eslint-disable-next-line no-unused-vars
  context: RateLimitContext & { key: string },
) => Promise<number | Response>;

const getHeaders = (nameOrHeaders?: RateLimitHeaders) => {
  nameOrHeaders = nameOrHeaders ?? "RateLimit";
  return !nameOrHeaders || typeof nameOrHeaders === "string"
    ? ([
        `X-${nameOrHeaders}-Limit`,
        `X-${nameOrHeaders}-Remaining`,
        `X-${nameOrHeaders}-Reset`,
      ] as const)
    : nameOrHeaders;
};

const rateLimited: OnRateLimit = ({ id }) => {
  return new Response(
    JSON.stringify({
      error: { message: `API rate limit exceeded for ${id}` },
    }),
    {
      status: 403,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};

const rateLimit = async (context: RateLimitContext) => {
  let { headers, id, limit, timeframe, count, onRateLimit } = context;

  const start = Date.now();
  const time = Math.floor(Date.now() / 1000 / timeframe);
  const key = `${id}:${time}`;
  let countOrRes: number | Response;

  try {
    countOrRes = await count({ ...context, key });
  } catch (err) {
    console.error("Rate limit `count` failed with:", err);
    return new Response(null);
  }

  const h = countOrRes instanceof Response ? countOrRes.headers : new Headers();
  const remaining = countOrRes instanceof Response ? 0 : limit - countOrRes;
  const reset = (time + 1) * timeframe;

  const latency = Date.now() - start;
  h.set("x-upstash-latency", `${latency}`);

  if (headers[0]) {
    h.set(headers[0], `${limit}`);
  }
  if (headers[1]) {
    h.set(headers[1], `${remaining < 0 ? 0 : remaining}`);
  }
  if (headers[2]) {
    h.set(headers[2], `${reset}`);
  }
  if (countOrRes instanceof Response) {
    return countOrRes;
  }
  if (remaining < 0) {
    const res = await onRateLimit(context);

    headers.concat("x-upstash-latency").forEach(key => {
      if (key) res.headers.set(key, h.get(key)!);
    });

    return res;
  }
  return new Response(null, { headers: h });
};

export const initRateLimit = (fn: RateLimitHandler) => {
  return async function isRateLimited(request: NextRequest) {
    const ctx = await fn(request);

    if (ctx instanceof Response) return ctx;

    return rateLimit({
      ...ctx,
      request: ctx.request ?? request,
      headers: getHeaders(ctx.headers),
      onRateLimit: ctx.onRateLimit ?? rateLimited,
    });
  };
};
