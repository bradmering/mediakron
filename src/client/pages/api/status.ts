import { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    version: "0.0.1",
    status: "ok",
    time: new Date().toISOString(),
  });
}
 