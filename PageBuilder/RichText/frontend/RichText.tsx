import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import EmbedHTML from "../Plugs/EmbedHTML/frontend/EmbedHTML";
import ImagePlug from "../Plugs/ImagePlug/frontend/ImagePlug";
import PlayerPlug from "../Plugs/videoPlug/frontend/PlayerPlug";
import LinkMark from "../marks/linkMark/frontend/LinkMark";
import React from "react";
import ListingPlug from "../Plugs/ListingPlug/frontend/ListingPlug";

type RichTextPros = {
  content?: any;
};

const components: Partial<PortableTextReactComponents> = {
  marks: { linkMark: LinkMark },
  block: {
    normal: ({ children }) => {
      const empty = Array.isArray(children) ? children.every((i) => !i) : false;

      if (empty) {
        return <span className="h-[2em] block" />;
      }

      return <p>{children}</p>;
    },
  },
  types: {
    embed: EmbedHTML,
    videoPlug: PlayerPlug,
    imagePlug: ImagePlug,
    listing: ListingPlug,
  },
};

const RichText: React.FC<RichTextPros> = (props) => {
  const { content = [] } = props;

  return <PortableText value={content} components={components} />;
};

export default RichText;
