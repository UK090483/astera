const url = "https://www.linkedin.com/company/lego-group/posts/?feedView=all";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fetched = await fetch(url);

  const linkedData = await fetched.json();

  res.json({ boom: "boom", linkedData });
}
