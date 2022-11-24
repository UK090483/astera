import { sanityClient } from "@lib/SanityService/sanity.server";
import type { NextApiRequest, NextApiResponse } from "next";
import { listingItemProjection } from "PageBuilder/Components/Listing/listing.query";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const contentType = query.contentType;
  const orderKey = query.orderKey;
  const last = query.last;

  if (!contentType) {
    res.json({ items: [], error: true });
  }

  const items =
    await sanityClient.fetch(`*[ _type == '${contentType}' && ${orderKey} < '${last}' ] | order(${orderKey} desc) [0...6] {
        ${listingItemProjection("de")}
    }`);

  res.json({ items });
};

export default handler;
