import { ObjectDefinition } from "../../../types";
import { LinkIcon } from "@sanity/icons";
const linkMarkSchema: ObjectDefinition = {
  name: "linkMark",
  title: "Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    {
      name: "internal",
      title: "Internal Link",
      type: "reference",
      to: [{ type: "page" }, { type: "person" }],
      options: {
        disableNew: true,
      },
      hidden: ({ parent }: any) => !!parent.href,
    },
    {
      name: "onPageLink",
      title: "On page Link",
      description: "must be the exact Title of a Section",
      type: "string",
      hidden: ({ parent }: any) => !parent.internal,
    },
    {
      name: "href",
      title: "External Link",
      type: "url",
      hidden: ({ parent }: any) => !!parent.internal,
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },

    {
      name: "asButton",
      title: "As Botton",
      type: "boolean",
    },
  ],
};

export default linkMarkSchema;
