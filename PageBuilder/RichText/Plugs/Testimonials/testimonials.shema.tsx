import { ObjectDefinition } from "../../../types";

export const testimonialsPlugSchema: ObjectDefinition = {
  title: "Testimonials",
  name: "testimonialsPlug",
  type: "object",
  fields: [
    { name: "name", title: "title", type: "string" },

    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "title", type: "string" },
            { name: "text", title: "Text", type: "text" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare({ name }) {
      return {
        title: "Testimonials: " + name || "",
      };
    },
  },
};
