// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const modpacks = await prisma.modpack.findMany({
    where: {
      modCount: {
        lt: 100,
      },
    },
  });

  // const modpackData = (await axios.get(`https://www.modpackindex.com/api/v1/modpack/${modpacks?.modpackId}`)).data
  // res.status(200).send({modpackData})
};
