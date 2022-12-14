import { ObjectDefinition, DocumentDefinition } from "../../types";
import { AiOutlineSearch } from "react-icons/ai";

const seoObject: ObjectDefinition = {
  title: "Seo",
  name: "seo",
  type: "object",
  fields: [
    {
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
      description: "Title used for search engines and browsers.",

      validation: (Rule) =>
        Rule.max(50).warning(
          "Longer titles may be truncated by search engines"
        ),
    },
    {
      title: "Meta Description",
      name: "metaDesc",
      type: "text",
      rows: 3,
      description: "Description for search engines.",

      validation: (Rule) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by search engines"
        ),
    },
    {
      title: "Share Title",
      name: "shareTitle",
      type: "string",
      description: "TItle used for social sharing cards.",

      validation: (Rule) =>
        Rule.max(50).warning("Longer titles may be truncated by social sites"),
    },
    {
      title: "Share Description",
      name: "shareDesc",
      type: "text",
      rows: 3,
      description: "Description for social sharing cards.",

      validation: (Rule) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by social sites"
        ),
    },
    {
      title: "Share Graphic",
      name: "shareGraphic",
      type: "image",
      description: "Share graphics will be cropped to 1200x630",
      options: {
        hotspot: true,
      },
    },
  ],
};

const seoSettings: DocumentDefinition = {
  icon: AiOutlineSearch,
  name: "seoConfig",
  title: "Seo config",
  type: "document",
  fields: [{ title: "Default", name: "seo", type: "seo" }],
  preview: {
    prepare(selection: any) {
      return {
        title: "Default Seo Setting",
        media: AiOutlineSearch,
      };
    },
  },
};

const seoSchema = [seoObject, seoSettings];
export default seoSchema;
