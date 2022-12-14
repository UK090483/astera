import {
  PortableText,
  PortableTextReactComponents,
  PortableTextListItemComponent,
} from "@portabletext/react";

import EmbedHTML from "../Plugs/EmbedHTML/frontend/EmbedHTML";
import ImagePlug from "../Plugs/ImagePlug/frontend/ImagePlug";
import PlayerPlug from "../Plugs/videoPlug/frontend/PlayerPlug";

import Download from "../Plugs/Download/frontend/Download";
import LinkMark from "../marks/linkMark/frontend/LinkMark";
import React from "react";
import ListingPlug from "../Plugs/ListingPlug/frontend/ListingPlug";

import ArrowIcon from "@components/ArrowIcon";
import { AIcon } from "@components/AIcon";
import DealsPlug from "../Plugs/Deals/frontend/DealsPlug";
import { useSection } from "@components/Section/SectionContext";
import clsx from "clsx";

type RichTextPros = {
  content?: any;
};

// const contentDotsItem: PortableTextListItemComponent = ({ children }) => {
//   const { bgColor } = useSection();
//   return (
//     <li className="flex ">
//       <div className="bullet ">
//         <AIcon className="w-full shrink-0  fill-current" />
//         <div className="line h-full bg-current w-0.5 "></div>
//       </div>
//       <span className="pb-16  w-full">{children}</span>
//     </li>
//   );
// };

const components: Partial<PortableTextReactComponents> = {
  marks: { linkMark: LinkMark },
  block: {
    headerSerif: ({ children }) => (
      <h1 className="garamondFont header1Serif"> {children}</h1>
    ),
    h1: ({ children }) => <h1 className="header1">{children}</h1>,
    h2: ({ children }) => <h2 className=" header2">{children}</h2>,
    textBig: ({ children }) => <p className=" textBig"> {children}</p>,

    normal: ({ children }) => {
      const empty = Array.isArray(children) ? children.every((i) => !i) : false;
      if (empty) {
        return <span className="h-[2em] block" />;
      }
      return <p>{children}</p>;
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-4 ">{children}</ul>,
    number: ({ children }) => (
      <ul className="list-decimal list-inside">{children}</ul>
    ),
    arrows: ({ children }) => <ul className="list-none">{children}</ul>,
    connectedDots: ({ children }) => {
      return <ul className="list-none connectedDots ">{children}</ul>;
    },
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
    arrows: ({ children }) => (
      <li className="flex mb-4 items-start">
        <ArrowIcon className=" fill-secondary shrink-0  w-4 mr-4 mt-[0.4em]" />
        <>{children}</>
      </li>
    ),
    connectedDots: ({ children }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { bgColor } = useSection();

      return (
        <li className="flex flex-nowrap gap-4">
          <div className="bullet ">
            <AIcon
              className={clsx("w-full shrink-0  ", {
                "fill-secondary": bgColor === "secondary-light",
                "fill-current": bgColor !== "secondary-light",
              })}
            />
            <div
              className={clsx("line h-full  w-0.5 ", {
                "bg-secondary": bgColor === "secondary-light",
                "bg-current": bgColor !== "secondary-light",
              })}
            ></div>
          </div>
          <div className="connectedDots-content min-w-[100px]  break-words">
            {children}
          </div>
        </li>
      );
    },
  },
  types: {
    download: Download,
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
