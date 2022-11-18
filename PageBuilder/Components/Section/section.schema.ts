import { addComponentStyle } from "../componentStyle";
import { ObjectDefinition } from "../../types";

const sectionSchema: ObjectDefinition = {
  name: "section",
  title: "Section",
  type: "object",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "style",
      title: "Style",
    },
    {
      name: "header",
      title: "Header",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      localize: true,
      group: "content",
    },
    {
      name: "content",
      type: "defaultRichText",
      title: "Content",
      localize: true,
      group: "content",
    },

    {
      group: "header",
      name: "header",
      type: "headerRichText",
      title: "Header",
      localize: true,
    },

    {
      title: "Text Direction",
      name: "textDirection",
      type: "string",
      group: "style",
      options: {
        list: [
          { title: "Left (default)", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
    },

    {
      title: "Header Position",
      name: "headerPosition",
      type: "string",
      options: {
        list: [
          { title: "Left (default)", value: "l" },
          { title: "Right", value: "r" },
        ],
      },
      group: "header",
    },
  ],
};

export default addComponentStyle(sectionSchema);
