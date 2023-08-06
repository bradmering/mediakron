import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("mediakron");
    const sites = await db.collection("sites").find({}).limit(10).toArray();

    return res.status(200).json({ sites });
  } catch (e) {
    console.error(e);
  }
}
