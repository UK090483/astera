import { uniqueId } from "lodash";
import { addSeo } from "../../Objects/Seo/Seo.decorator";
import { getEditorField } from "../Base/Editor/editor.field";
import createContentType, { getSlugField } from "../helper";
import { FaRegNewspaper } from "react-icons/fa";

import {} from "@sanity/icons";

const pageSchema = createContentType({
  name: "news",
  title: "News",
  //@ts-ignore
  icon: FaRegNewspaper,

  fields: [
    getSlugField(),
    {
      type: "date",
      name: "startDate",
      title: "Publish Date",
      group: "content",
    },
    {
      type: "string",
      name: "category",
      title: "Category",
      group: "content",
      options: {
        list: [
          { title: "Finance Deal", value: "financeDeal" },
          { title: "Private Equity Deal", value: "privateEquityDeal" },
          { title: "Event", value: "event" },
          { title: "Other", value: "other" },
        ],
      },
    },
    getEditorField(
      [
        { type: "hero" },
        { type: "section" },
        { type: "listing" },
        { type: "imageGalleryPlug" },
        { type: "newsSection" },
      ],
      [
        {
          _key: uniqueId(),
          _type: "hero",
          title: "Hero",
        },
        {
          _key: uniqueId(),
          _type: "newsSection",
          title: "News Section",
        },
      ]
    ),
  ],
});

export default addSeo(pageSchema);
