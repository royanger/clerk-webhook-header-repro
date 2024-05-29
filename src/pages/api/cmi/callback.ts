import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    console.log("===== POST REQ RECEVIED =====");
    console.log(req.headers);
    if (!req.body) {
      return res.send("FAILURE");
    }
  }

  return res.send("not a post request");
}
