import { config } from "@lib/SanityService/config";
import createClient from "@sanity/client";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const sanityClient = createClient({ ...config });

  const result = await sanityClient.fetch(`*[_type == 'person'][]{...}`);
  res.json({ boom: "boom", result });
}
