import { config } from "@lib/SanityService/config";
import createClient, { SanityClient } from "@sanity/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { faker } from "@faker-js/faker";

faker.setLocale("de");

import { v4 as uuid } from "uuid";
import { uniqueId } from "lodash";
const client = createClient({
  ...config,
  token: process.env.SANITY_CREATOR_TOKEN,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const arr = new Array(10).fill("whatever");

  const docs = arr.map(() => createDocument({ client, type: "post" }));

  const result = await Promise.all(docs);
  res.json({ result });
};

export default handler;

type createDocumentProps = {
  client: SanityClient;
  type: string;
  // item: DocumentDefinition;
};

const person = async () => {
  const image = await createImage({
    client,
    url: "https://i.pravatar.cc/1000",
  });
  const mainImage = {
    _type: "defaultImage",
    alt: "ss",
    asset: {
      _ref: image?._id,
      _type: "reference",
    },
  };

  const name = faker.name.fullName();

  return {
    _type: "person",
    _id: `__fakeItem__${uuid()}`,
    title: name,
    title_en: "En_" + name,
    subTitle: faker.random.words(2),
    subTitle_en: "en_" + faker.random.words(2),
    description: faker.lorem.paragraph(),
    description_en: "En_" + faker.lorem.paragraph(),
    slug: { _type: "slug", current: faker.helpers.slugify(name) },
    slug_en: { _type: "slug", current: faker.helpers.slugify(name) + "_en" },
    mainImage,
    body: [
      {
        _key: uniqueId(),
        _type: "hero",
        title: "Hero",
      },
      {
        _key: uniqueId(),
        _type: "personSection",
        title: "Person Section",
      },
    ],
  };
};
const news = async () => {
  return {
    _type: "news",
    _id: `__fakeItem__${uuid()}`,
    category: faker.helpers.arrayElement([
      "financeDeal",
      "privateEquityDeal",
      "event",
      "person",
    ]),
    title: faker.random.words(Math.floor(Math.random() * 10)),
    title_en: "En" + faker.random.words(Math.floor(Math.random() * 10)),

    description: faker.lorem.words(10),
    description_en: faker.lorem.words(10) + "En",
    slug: { _type: "slug", current: faker.lorem.slug() },
    slug_en: { _type: "slug", current: faker.lorem.slug() + "en" },
    startDate: faker.date
      .between("2018-01-01T00:00:00.000Z", "2022-01-01T00:00:00.000Z")
      .toISOString()
      .split("T")[0],
    // mainImage,

    body: [
      {
        _key: uniqueId(),
        _type: "hero",
        title: "Hero",
      },
      {
        _key: uniqueId(),
        _type: "newsSection",
        title: "News Section",
      },
    ],
  };
};

async function createDocument({ client }: createDocumentProps) {
  // const p = await person();
  const n = await news();

  // await client.create(p);

  return client.create(n);
}

type createImageProps = {
  client: SanityClient;
  url: string;
};
async function createImage({ client, url }: createImageProps) {
  const fetchResult = await fetch(url);
  const body = await fetchResult.body;
  if (body) {
    return await client.assets.upload("image", body, { label: "__fakeItem__" });
  }

  return null;
}
