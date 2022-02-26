import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async(req: NextApiRequest, res: NextApiResponse) => {
    const modDat = await axios.get(`https://www.modpackindex.com/api/v1/modpack/${req.body.id}/mods`);
    const modActDatLen = modDat.data["data"].length;

    res.status(200).json({"modCount": modActDatLen})
}