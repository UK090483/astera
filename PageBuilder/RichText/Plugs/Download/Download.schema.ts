import { toPlainText } from "@portabletext/react";
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
  preview: {
    select: {
      description: "description",
      file: "file",
      image: "image",
    },
    prepare({ description, file, image }: any) {
      const isFile = !!file;
      const isImage = !!image;

      const type = isFile ? "File" : isImage ? "Image" : "no file chosen";

      return {
        title: toPlainText(description || []) || "Download",
        subtitle: `${type}`,
        media: image || file,
      };
    },
  },
};

export default DownloadPlugSchema;
