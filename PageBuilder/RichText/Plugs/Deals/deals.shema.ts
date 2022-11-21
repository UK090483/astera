import { ObjectDefinition } from "../../../types";

export const dealsPlugSchema: ObjectDefinition = {
  title: "Deals",
  name: "dealsPlug",
  type: "object",
  fields: [{ name: "name", title: "title", type: "string" }],
  preview: {
    select: {
      name: "name",
    },
    prepare({ name }) {
      return {
        title: "Deals: " + name,
      };
    },
  },
};
