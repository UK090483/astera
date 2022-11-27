import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import EmbedHTML from "../Plugs/EmbedHTML/frontend/EmbedHTML";
import ImagePlug from "../Plugs/ImagePlug/frontend/ImagePlug";
import PlayerPlug from "../Plugs/videoPlug/frontend/PlayerPlug";
import LinkMark from "../marks/linkMark/frontend/LinkMark";
import React from "react";
import ListingPlug from "../Plugs/ListingPlug/frontend/ListingPlug";

import ArrowIcon from "@components/ArrowIcon";
import { AIcon } from "@components/AIcon";
import DealsPlug from "../Plugs/Deals/frontend/DealsPlug";

type RichTextPros = {
  content?: any;
};

const components: Partial<PortableTextReactComponents> = {
  marks: { linkMark: LinkMark },
  block: {
    // h1: ({ children }) => {
    //   return <h1 className=" text-4xl "> {children}</h1>;
    // },
    normal: ({ children }) => {
      const empty = Array.isArray(children) ? children.every((i) => !i) : false;

      if (empty) {
        return <span className="h-[2em] block" />;
      }

      return <p>{children}</p>;
    },
  },
  list: {
    arrows: ({ children }) => <ul className="list-none">{children}</ul>,
    connectedDots: ({ children }) => (
      <ul className="list-none connectedDots">{children}</ul>
    ),
  },
  listItem: {
    arrows: ({ children }) => (
      <li className="flex mb-4">
        <ArrowIcon className=" fill-secondary shrink-0 mt-[0.35em] mr-4" />
        <p className=" ">{children}</p>
      </li>
    ),
    connectedDots: ({ children }) => (
      <li className="flex ">
        <div className="bullet ">
          <AIcon className="w-full shrink-0  fill-current" />
          <div className="line h-full bg-current w-0.5 "></div>
        </div>
        <p className="pb-8   w-full">{children}</p>
      </li>
    ),
  },
  types: {
    embed: EmbedHTML,
    videoPlug: PlayerPlug,
    imagePlug: ImagePlug,
    listing: ListingPlug,
    dealsPlug: DealsPlug,
  },
};

const RichText: React.FC<RichTextPros> = (props) => {
  const { content = [] } = props;

  return <PortableText value={content} components={components} />;
};

export default RichText;
