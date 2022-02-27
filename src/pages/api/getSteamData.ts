import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async(req: NextApiRequest, res: NextApiResponse) => {
    const data = (await axios.get(`http://store.steampowered.com/api/appdetails?appids=${req.body.id}`)).data
    res.status(200).send({data})
}