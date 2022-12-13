import {
  buildVariantFields,
  buildFilterFields,
  buildReferenceListFields,
} from "../../lib/listingBuilder/buildSchema";
import { ObjectDefinition, ArrayOfType } from "../../types";
import { addComponentStyle } from "../componentStyle";
import sectionTitle from "../sectionTitle";
import { items } from "./listing.items";

const listingSchema: ObjectDefinition = {
  title: "Listing",
  name: "listing",
  type: "object",
  groups: [{ name: "content", title: "Content", default: true }],

  fields: [
    sectionTitle({ group: "content" }),

    {
      group: "content",
      title: "Content type",
      name: "contentType",
      type: "string",
      options: {
        list: [
          ...items.map((i) => ({
            title: i.title,
            value: i.name,
          })),
        ],
        layout: "radio",
      },
    },
    ...buildVariantFields(items),
    ...buildFilterFields(items),
    ...buildReferenceListFields(items),

    {
      group: "content",
      title: "Header",
      name: "header",
      type: "headerRichText",
      localize: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      contentType: "contentType",
    },
    prepare({ title, contentType }: any) {
      return {
        title: title ? title : contentType,
        subtitle: `Listing: ${contentType ? " - " + contentType : ""}`,
      };
    },
  },
};

export default addComponentStyle(listingSchema);
