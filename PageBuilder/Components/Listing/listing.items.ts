import { listingBuilderItem } from "PageBuilder/lib/listingBuilder/types";
import { ArrayOfType } from "PageBuilder/types";
import { colorList } from "../componentStyle";

const customItem: ArrayOfType = {
  name: "bla",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
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
};

export type listingItem = {
  name: string;
  title: string;
  reference?: string;
  variants?: { value: string; title: string }[];
  filter?: { value: string; title: string; queryFilter: string }[];
  projection?: string;
  items?: ArrayOfType[];
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
        queryFilter: { filter: `defined(_id)` },
      },
    ],
  },
  {
    name: "page",

    title: "Page",
    items: [{ type: "reference", to: [{ type: "page" }] }],
  },
  {
    name: "news",
    title: "News",
    filter: [
      {
        title: "Last 8",
        value: "last 8",
        queryFilter: {
          filter: `defined(_id)`,
          order: "startDate",
          slice: { start: 0, end: 10 },
        },
      },
      {
        title: "All",
        value: "all",
        queryFilter: {
          filter: `defined(_id)`,
          order: "startDate",
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
];