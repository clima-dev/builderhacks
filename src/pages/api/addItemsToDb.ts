import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient()

interface Modpack {
    modpackId: number,
    modCount: number,
    downloadCount: number
}

let modpackTable: Modpack[] = [
    
];

async function addModpack(id: number) {
    const modDat = await axios.get(`https://www.modpackindex.com/api/v1/modpack/${id}/mods`);
    const modD = await (await axios.get(`https://www.modpackindex.com/api/v1/modpack/${id}`)).data;
    const modActDatLen = modDat.data["data"].length;

    modpackTable.push({
        modpackId: id,
        modCount: modActDatLen,
        downloadCount: modD.data.download_count
    })
}

export default async(req: NextApiRequest, res: NextApiResponse) => {
    for (let index = 0; index < 10; index++) {
        const dat = (await axios.get(`https://www.modpackindex.com/api/v1/modpacks?limit=10?page=${index}`)).data

        dat.data.forEach((modpack: any) => {
            addModpack(modpack.id)
        });
    }

    await prisma.modpack.createMany({
        data: modpackTable,
        skipDuplicates: true,
    })
}