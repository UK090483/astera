import { ArrayDefinition } from "../types";
import React from "react";

const defaultRichText = {
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

          blockEditor: {
            icon: () => <ArrowIcon />,
          },
        },
        {
          title: "Connected Dots",
          value: "connectedDots",

          blockEditor: {
            icon: () => <AIcon />,
          },
        },
      ],
      marks: {
        annotations: [{ type: "linkMark" }],
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
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

export default defaultRichText as ArrayDefinition;

const ArrowIcon: React.FC<{ className?: string }> = (props) => {
  return (
    <svg
      viewBox="0 0 17 12"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 16, height: 16, fill: "var(--card-fg-color)" }}
    >
      <path d="M12.1713 11.8741L16.1713 6.87408L16.9209 5.93704L16.1713 5L12.1713 0L9.82869 1.87409L13.0791 5.93704L9.82869 10L12.1713 11.8741ZM1.14441e-05 7.4978L9.00001 7.4978L9.00001 4.4978L1.14441e-05 4.4978V7.4978Z" />
    </svg>
  );
};

export function AIcon() {
  return (
    <svg
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 16, height: 16, fill: "var(--card-fg-color)" }}
    >
      <path d="M24.7346 17.771C26.0074 20.6647 26.7477 21.9456 27.995 22.4845C29.2679 20.2793 30 17.7222 30 14.9926C30 7.43874 24.4211 1.19095 17.1611 0.142416L24.7346 17.771Z" />
      <path d="M18.4381 13.572L14.5909 4.6486L10.7438 13.572H18.4381Z" />
      <path d="M17.3888 24.0707V22.8454C21.5869 22.8454 21.9948 21.8538 20.5378 18.4128L19.3711 15.7297H9.81074L8.64414 18.4128C7.18708 21.8538 7.18708 22.8454 11.793 22.8454V24.0707H3.05762C5.79743 27.673 10.1264 30 15 30C19.8735 30 24.2025 27.6729 26.9423 24.0707H17.3888H17.3888Z" />
      <path d="M6.77937 17.771L14.414 0C6.40175 0.308392 0 6.90084 0 14.9926C0 17.8462 0.796343 20.5135 2.17826 22.7848C4.51316 22.5496 5.14371 21.4895 6.77937 17.771Z" />
    </svg>
  );
}
