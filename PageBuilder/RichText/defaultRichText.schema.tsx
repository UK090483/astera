import { ArrayDefinition } from "../types";
import React from "react";
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

        { title: "Subheader official", value: "SubheaderSanSerif" },
        {
          title: "text big",
          value: "textBig",
          //@ts-ignore
          blockEditor: {
            render: (props: any) => (
              <span
                style={{
                  fontSize: "1.2em",
                }}
              >
                {props.children}
              </span>
            ),
          },
        },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
        {
          title: "Arrows",
          value: "arrows",

          //@ts-ignore
          blockEditor: {
            icon: () => "Blaaa",
            render: (props: any) => (
              <span
                style={{
                  color: "red",
                }}
              >
                {props.children}
              </span>
            ),
          },
        },
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
    { type: "download" },
  ],
};

export default defaultRichText;
