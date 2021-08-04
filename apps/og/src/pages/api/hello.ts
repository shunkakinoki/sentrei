import { withSentry } from "@sentry/nextjs";
import type { NextApiHandler } from "next";

const hello: NextApiHandler = (req, res) => {
  console.log(req);
  res.json({ hello: "World" });
};

export default withSentry(hello);
