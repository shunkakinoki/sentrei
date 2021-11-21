import * as z from "zod";
import { Wallet } from "../../../../node_modules/@prisma/client";

export const _WalletModel = z.object({
  id: z.string(),
  createdAt: z.date(),
});
