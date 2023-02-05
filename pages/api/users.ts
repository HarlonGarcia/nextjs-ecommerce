import { prisma } from "@/db/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handleUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  }
}
