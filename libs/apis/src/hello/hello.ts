import Cors from "cors";
import type { NextApiHandler } from "next";

import { middleware } from "@sentrei/apis";

const cors = Cors({
  methods: ["GET"],
});

export const hello: NextApiHandler = async (req, res) => {
  await middleware(req, res, cors);
  console.log(req);
  res.json({ hello: "World" });
};

export default hello;
