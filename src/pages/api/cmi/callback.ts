import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("===== REQ RECEVIED =====");
  console.log("req.headers");
  if (!req.body) {
    return res.send("FAILURE");
  }

  return res.send("SUCCESS");
}
