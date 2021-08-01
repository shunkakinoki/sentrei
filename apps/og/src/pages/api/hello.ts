import type { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  console.log(req);
  res.json({ hello: "World" });
};

export default handler;
