import { ObjectDefinition } from "../../../types";

const DownloadPlugSchema: ObjectDefinition = {
  title: "DownLoad",
  name: "download",
  type: "object",
  fields: [
    { name: "description", type: "headerRichText", title: "Description" },
    {
      name: "file",
      type: "file",
      title: "File",
      hidden: ({ parent }: any) => !!parent.image,
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      hidden: ({ parent }: any) => !!parent.file,
    },
  ],
};

export default DownloadPlugSchema;
