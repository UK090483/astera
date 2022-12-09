import { DocumentDefinition } from "PageBuilder/types";
import { AiOutlineLink } from "react-icons/ai";

export const SettingsDocument: DocumentDefinition = {
  icon: AiOutlineLink,
  name: "baseConfig",
  title: "Base config",
  type: "document",
  fields: [
    {
      name: "address",
      title: "Address",
      type: "text",
    },
    {
      name: "addressLink",
      title: "Address Link",
      type: "url",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "emailAddress",
      title: "Email",
      type: "string",
    },

    {
      name: "defaultHero",
      title: "Default Hero image",
      type: "defaultImage",
    },

    {
      name: "defaultPersonHero",
      title: "Default Hero image Person",
      type: "defaultImage",
    },
    {
      name: "personListingPage",
      title: "Person Listing Page",
      type: "object",
      fields: [
        {
          name: "page",
          type: "reference",
          to: [{ type: "page" }],
        },
        {
          name: "onPageLink",
          title: "On page Link",
          description: "must be the exact Title of a Section",
          type: "string",
        },
      ],
    },
    {
      name: "defaultNewsHero",
      title: "Default Hero image News",
      type: "defaultImage",
    },
    {
      name: "heroListingPage",
      title: "Hero Listing Page",
      type: "object",
      fields: [
        {
          name: "page",
          type: "reference",
          to: [{ type: "page" }],
        },
        {
          name: "onPageLink",
          title: "On page Link",
          description: "must be the exact Title of a Section",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    prepare(selection: any) {
      return {
        title: "base Setting",
      };
    },
  },
};
