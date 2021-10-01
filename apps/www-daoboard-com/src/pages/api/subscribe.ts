import type { NextApiRequest, NextApiResponse } from "next";

export const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const result = await fetch("https://www.getrevue.co/api/v2/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.error.email[0]);
    }

    console.log(data);
    return res.status(201).json({ error: "" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ error: err.message || err.toString() });
    }
  }
};

export default subscribe;
