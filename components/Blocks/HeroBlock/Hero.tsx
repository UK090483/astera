/* eslint-disable @next/next/no-img-element */

import SanityImage from "@lib/SanityImage";
import useSanityImage from "@lib/SanityImage/useSanityImage";
import BlockContent, { Serializers } from "@sanity/block-content-to-react";
import React from "react";
import { HeroBlogResult } from "./HeroBlockQuery";

interface HeroProps extends HeroBlogResult {}

//@ts-ignore
const InlineImage = (props) => {
  //@ts-ignore
  const { src } = useSanityImage(props.mark);

  return (
    <span style={{ height: "0.705em" }} className="relative inline-block ">
      {src && (
        <img
          style={{ height: "0.705em" }}
          height="0.8em"
          src={src + "&w=200"}
          alt=""
        />
      )}
    </span>
  );
};
//@ts-ignore
const BlockRenderer = (props) => {
  return React.createElement("span", { className: "block" }, props.children);
};

const serializer: Serializers = {
  types: { block: BlockRenderer },
  marks: {
    image: InlineImage,
    brake: ({ children }) => {
      return <>&shy;{children}</>;
    },
    unbreakable: ({ children }) => {
      return <span className="whitespace-nowrap">{children}</span>;
    },
  },
  container: (props: any) => {
    return <h1>{props?.children}</h1>;
  },
};

const Hero: React.FC<HeroProps> = (props) => {
  const { text, image } = props;

  return (
    <div
      data-testid="heroBlock"
      className="flex flex-col h-hero-mobile  sm:h-hero pt-11 lg:pt-16 relative justify-center items-center"
    >
      <SanityImage image={image} objectFit="cover" />
      {text && (
        <BlockContent
          renderContainerOnSingleChild={true}
          blocks={text}
          serializers={serializer}
        />
      )}
    </div>
  );
};

export default Hero;
