import { prisma } from "@/db/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";
import DataURIParser from "datauri/parser";
import cloudinary from "@/utils/cloudinary";
import path from "path";

const upload = multer({ storage: multer.memoryStorage() });

const route = nextConnect({
  onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' not allowed` });
  },
});

const uploadMiddleware = upload.single("imageUri");

route.post(uploadMiddleware, async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file;

  const parser = new DataURIParser();

  try {
    const createImage = async (image: Express.Multer.File) => {
      const base64Image = parser.format(
        path.extname(image.originalname).toString(),
        image.buffer
      );
      const uploadedImageResponse = await cloudinary.v2.uploader.upload(
        base64Image.content as string,
        { resource_type: "image" }
      );
      return uploadedImageResponse;
    };

    const createdImage = await createImage(image as Express.Multer.File);
    const imageUrl = createdImage.url;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        imageUri: imageUrl,
      },
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error, data: null });
  }
});

route.get(async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).json(products);
});

export default route;

export const config = {
  api: {
    bodyParser: false,
  },
};
