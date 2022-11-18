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
  ],
  preview: {
    prepare(selection: any) {
      return {
        title: "base Setting",
      };
    },
  },
};
