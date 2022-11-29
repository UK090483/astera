import { ArrayDefinition } from "../types";
import React from "react";
const headerRichText: ArrayDefinition = {
  name: "headerRichText",
  type: "array",

  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        {
          title: "Header Serif",
          value: "headerSerif",
          //@ts-ignore
          blockEditor: {
            render: (props: any) => (
              <span
                style={{
                  fontFamily: "Garamond",
                  fontSize: "2em",
                  fontWeight: 800,
                }}
              >
                {props.children}
              </span>
            ),
          },
        },
      ],

      marks: {
        annotations: [{ type: "link" }],
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
      },
    },
  ],
};

export default headerRichText;
