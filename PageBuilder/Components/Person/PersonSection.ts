import { ObjectDefinition } from "PageBuilder/types";

const personSectionSchema: ObjectDefinition = {
  name: "personSection",
  title: "Person Section",
  type: "object",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "header",
      type: "headerRichText",
      title: "Header",
      localize: true,
    },
  ],
};

export default personSectionSchema;
