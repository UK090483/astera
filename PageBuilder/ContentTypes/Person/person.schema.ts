import { uniqueId } from "lodash";
import { SchemaItem } from "PageBuilder/types";
import { title } from "process";
import { getEditorField } from "../Base/Editor/editor.field";
import {
  getContentTypeBaseFields,
  getSlugField,
  getSubTitleField,
} from "../helper";

const pageSchema: SchemaItem = {
  name: "person",
  title: "Person",
  type: "document",
  groups: [
    {
      name: "base",
      title: "Base",
      default: true,
    },
    {
      name: "content",
      title: "Content",
    },
  ],
  fields: [
    {
      type: "array",
      title: "Accomplishments",
      name: "accomplishments",

      of: [{ type: "testimonialItem" }],
    },

    getEditorField(
      [{ type: "hero" }, { type: "section" }, { type: "personSection" }],
      [
        {
          _key: uniqueId(),
          _type: "hero",
          title: "Hero",
        },
        {
          _key: uniqueId(),
          _type: "personSection",
          title: "Person Section",
        },
      ]
    ),
    ...getContentTypeBaseFields({ group: "base" }),
    getSubTitleField({ title: "Job description" }),
    getSlugField({ group: false }),
  ],
};

export default pageSchema;
