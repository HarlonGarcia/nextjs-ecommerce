import { prisma } from "@/db/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const route = nextConnect({
  onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' not allowed` });
  },
});

route.delete(async (req, res) => {
  const { id } = req.query;

  if (id) {
    const products = await prisma.product.delete({
      where: {
        id: id as string,
      },
    });

    res.status(200).json(products);
  }
});

export default route;
