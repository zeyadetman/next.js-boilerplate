// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getTopics } from "../../../utils/googlesheets";

type Data = {
  topics?: any;
  error?: string;
};

export default async function getTopicsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await getTopics();
  if (data) {
    return res.status(200).json({ topics: data });
  }

  return res.status(500).json({ error: "Failed to get topics" });
}
