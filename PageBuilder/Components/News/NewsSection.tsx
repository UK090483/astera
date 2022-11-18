import { ObjectDefinition } from "PageBuilder/types";

const newsSectionSchema: ObjectDefinition = {
  name: "newsSection",
  title: "News Section",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
  ],
};

export default newsSectionSchema;
