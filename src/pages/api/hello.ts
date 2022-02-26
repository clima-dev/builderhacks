// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dat = await axios.get(`https://www.modpackindex.com/api/v1/modpack/${req.body.id}`)
  const actualData = dat.data;

  console.log(actualData);

  

  const modDat = await axios.get(`https://www.modpackindex.com/api/v1/modpack/${req.body.id}/mods`);
  const modActDatLen = modDat.data["data"].length;

  let doesPlayerHaveEnoughRam = false;
  console.log(req.body.ram)
  if (req.body.ram - 3 >= 7 && modActDatLen <= 300) {
    console.log("Hi")
    doesPlayerHaveEnoughRam = true
  }  else {
    console.log("bye")
    doesPlayerHaveEnoughRam = false
  }

  res.status(200).json({ modActDatLen, doesPlayerHaveEnoughRam });
};
