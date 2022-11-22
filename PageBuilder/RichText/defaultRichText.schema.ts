import { ArrayDefinition } from "../types";

const defaultRichText: ArrayDefinition = {
  name: "defaultRichText",
  title: "defaultRichText",
  type: "array",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
        { title: "Arrows", value: "arrows" },
        { title: "Connected Dots", value: "connectedDots" },
      ],
      marks: {
        annotations: [{ type: "linkMark" }],
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
      },
    },
    { type: "embed" },
    { type: "videoPlug" },
    { type: "imagePlug" },
    { type: "dealsPlug" },
  ],
};

export default defaultRichText;
