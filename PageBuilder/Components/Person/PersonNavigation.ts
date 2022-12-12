import { ObjectDefinition } from "PageBuilder/types";

const personNavigationSchema: ObjectDefinition = {
  name: "personNavigation",
  title: "Person Navigation",
  type: "object",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      initialValue: "Person Navigation",
    },
  ],
};

export default personNavigationSchema;
