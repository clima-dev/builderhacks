import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async(req: NextApiRequest, res: NextApiResponse) => {
    const modpacks = await prisma.modpack.findMany({
        where: {
            modCount: {
                lt: 100
            }
        },
        orderBy: {
            downloadCount: 'desc'
        }
    });

    console.log(modpacks)
}