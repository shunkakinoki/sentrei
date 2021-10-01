/* eslint-disable no-unused-vars */

import type Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";

export const middleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (
    req: Cors.CorsRequest,
    res: {
      statusCode?: number | undefined;
      setHeader(key: string, value: string): any;
      end(): any;
    },
    next: (err?: any) => any,
  ) => void,
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};
