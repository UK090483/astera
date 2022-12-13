import { ObjectDefinition } from "../../types";
import sectionTitle from "../sectionTitle";
const HeroObject: ObjectDefinition = {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    sectionTitle(),
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Content",
      name: "content",
      type: "headerRichText",
      localize: true,
    },
    {
      title: "with News ticker",
      name: "newsTicker",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare({ title, image }: any) {
      return {
        title: title,
        media: image,
      };
    },
  },
};

export default HeroObject;
