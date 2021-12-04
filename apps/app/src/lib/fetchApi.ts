export const fetchAPI = async (
  url: string,
  options: RequestInit & { data?: any } = {},
) => {
  try {
    const res = await fetch(`/api${url}`, {
      ...options,
      headers: {
        ...options.headers,
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      ...(options.data ? { body: JSON.stringify(options.data) } : {}),
    });
    const data = await res.json();
    return data;
  } catch (e: any) {
    if (e.message === "cancelled") {
      console.warn("Request Cancelled by the Browser", e);
    } else {
      console.error(e);
    }
  }
};
