import { prisma } from "@/db/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}
