const upstash = async ({
  url,
  token,
  ...init
}: { url: string; token: string } & RequestInit) => {
  const res = await fetch(url, {
    ...init,
    headers: {
      authorization: `Bearer ${token}`,
      ...init.headers,
    },
  });

  const data = res.headers.get("Content-Type")!.includes("application/json")
    ? await res.json()
    : await res.text();

  if (res.ok) {
    return data;
  } else {
    throw new Error(
      `Upstash failed with (${res.status}): ${
        typeof data === "string" ? data : JSON.stringify(data, null, 2)
      }`,
    );
  }
};

export const upstashRest = (args: any[], options?: { pipeline: boolean }) => {
  const domain = process.env.UPSTASH_REST_API_DOMAIN;
  const token = process.env.UPSTASH_REST_API_TOKEN;

  if (!domain || !token) {
    throw new Error("Missing required Upstash credentials of the REST API");
  }

  return upstash({
    token,
    url: `${domain}${options?.pipeline ? "/pipeline" : ""}`,
    method: "POST",
    body: JSON.stringify(args),
  });
};
