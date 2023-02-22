import { withLocalization } from "../../helper/withLocalization";
import { listingBuilderItem } from "PageBuilder/lib/listingBuilder/types";
import { ArrayOfType } from "PageBuilder/types";
import { colorList } from "../componentStyle";
import { toPlainText } from "@portabletext/react";

import { locale } from "../../constants";

const customItem: ArrayOfType = withLocalization(
  [
    {
      //@ts-ignore
      title: "Custom List Item",
      name: "bla",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          // validation: (Rule: any) => Rule.required(),
          localize: true,
        },
        {
          name: "description",
          type: "text",
          title: "Description",
          localize: true,
          // description: "should be between 50 and 160 characters",
          // validation: (Rule: any) => [
          //   Rule.max(160).error("should not be more than 160 characters"),
          //   Rule.min(50).warning("should be at least 50 characters"),
          // ],
        },
        {
          title: "Background Color",
          name: "bgColor",
          type: "string",
          options: {
            list: [...colorList()],
          },
        },
        {
          name: "mainImage",
          type: "image",
        },
        {
          name: "link",
          type: "link",
        },
      ],
    },
  ],
  locale
)[0];

const testimonialItem: ArrayOfType = withLocalization(
  [
    {
      //@ts-ignore
      name: "testimonial",
      type: "object",
      fields: [
        {
          name: "content",
          type: "headerRichText",
          title: "Description",
          localize: true,
        },
      ],

      preview: {
        select: {
          content: "content",
        },
        prepare(selection) {
          const { content, date } = selection;
          return {
            //@ts-ignore
            title: content ? toPlainText(content) : "no Content yet",
          };
        },
      },
    },
  ],
  locale
)[0];

const rankingItem: ArrayOfType = withLocalization(
  [
    {
      //@ts-ignore
      name: "ranking",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "content",
          type: "headerRichText",
          title: "Description",
          localize: true,
        },
      ],
    },
  ],
  locale
)[0];

export type listingItem = {
  name: string;
  title: string;
  reference?: string;
  variants?: { value: string; title: string }[];
  filter?: { value: string; title: string; queryFilter: string }[];
  projection?: string;
  items?: ArrayOfType[];
  content?: any;
};

export const items: listingBuilderItem[] = [
  {
    name: "person",

    title: "Person",
    items: [{ type: "reference", to: [{ type: "person" }] }],
    filter: [
      {
        title: "All",
        value: "all",
        queryFilter: { filter: `defined(_id)`, order: "orderRank" },
      },
    ],
  },

  {
    name: "news",
    title: "News",
    filter: [
      {
        title: "Last 6 Deals",
        value: "list-a",
        queryFilter: {
          filter: `category in ['financeDeal','privateEquityDeal']`,
          order: "startDate desc",
          slice: { start: 0, end: 6 },
        },
      },
      {
        title: "All",
        value: "all",
        queryFilter: {
          filter: `defined(_id)`,
          order: "startDate desc",
          slice: { start: 0, end: 6 },
        },
      },
    ],
    variants: [
      { value: "grid", title: "Grid" },
      { value: "list", title: "List" },
      { value: "carousel", title: "Carousel" },
    ],
    items: [{ type: "reference", to: [{ type: "news" }] }],
  },
  {
    name: "custom",
    title: "Custom",
    items: [customItem],
  },
  {
    name: "testimonial",
    title: "Testimonial",
    items: [testimonialItem],
  },
  {
    name: "ranking",
    title: "Ranking",
    items: [rankingItem],
  },
];
