import { ObjectDefinition } from "../../../types";
const linkMarkSchema: ObjectDefinition = {
  name: "linkMark",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "internal",
      title: "Internal Link",
      type: "reference",
      to: [{ type: "page" }],
      options: {
        disableNew: true,
      },
      hidden: ({ parent }: any) => !!parent.href,
    },
    {
      name: "href",
      title: "External Link",
      type: "url",
      hidden: ({ parent }: any) => !!parent.internal,
    },

    {
      name: "asButton",
      title: "As Botton",
      type: "boolean",
    },
  ],
};

export default linkMarkSchema;
