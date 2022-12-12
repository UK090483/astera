import { uniqueId } from "lodash";
import { SchemaItem } from "PageBuilder/types";
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
    getEditorField(
      [
        { type: "hero" },
        { type: "section" },
        { type: "personSection" },
        { type: "personNavigation" },
      ],
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
    ...getContentTypeBaseFields({ group: "base" }).map((field) =>
      field.name !== "description"
        ? field
        : { ...field, description: "", validation: undefined }
    ),
    getSubTitleField({ title: "Job description", group: "content" }),
    {
      type: "array",
      title: "Accomplishments",
      name: "accomplishments",
      group: "content",
      of: [{ type: "testimonialItem" }],
    },
    getSlugField({ group: "base" }),
  ],

  preview: {
    select: {
      media: "mainImage",
      title: "title",
      subtitle: "subTitle",
    },
  },
};

export default pageSchema;
