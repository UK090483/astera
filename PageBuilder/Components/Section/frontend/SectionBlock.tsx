import RichText from "../../../RichText/frontend/RichText";
import Section from "@components/Section/Section";
import SanityImage from "@components/SanityImage";
import clsx from "clsx";
import React from "react";
import type { SectionResult } from "../section.query";
import { ImageResult } from "PageBuilder/constants";
import { headerRichTextQueryResult } from "PageBuilder/RichText/headerRichText.query";

const SectionBlock: React.FC<SectionResult> = (props) => {
  const {
    content,
    bottomSpace,
    topSpace,
    title,
    image,
    type,
    headerPosition = "l",
    backgroundColor,
    textDirection,
    header,
  } = props;

  const hasImage = image && image.url;
  const autoType = hasImage ? "m" : "l";

  return (
    <>
      <Section
        topSpace={topSpace}
        bottomSpace={bottomSpace}
        bg={backgroundColor}
        data-testid="sectionBlock"
        width={type || autoType}
        {...(title && { id: title })}
        className={clsx({
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8": hasImage,
          "text-center": textDirection === "center",
          "text-right": textDirection === "right",
        })}
      >
        {header ? (
          <WithHeader place={headerPosition || "l"} header={header}>
            {content && <RichText content={content} />}
          </WithHeader>
        ) : (
          <>{content && <RichText content={content} />} </>
        )}
      </Section>

      <div className="clear-both"></div>
    </>
  );
};

const WithImage: React.FC<{
  place: "l" | "r";
  image: ImageResult;
}> = ({ children, place = "l", image }) => {
  return (
    <>
      <div
        className={clsx(
          "relative overflow-hidden aspect-w-1 aspect-h-1 border-2",
          {
            " md:order-2 ": place === "r",
          }
        )}
      >
        <SanityImage
          style={{ margin: 0 }}
          src={image}
          className={"object-cover"}
        />
      </div>
      <div className={"lg:col-span-2 "}>{children}</div>
    </>
  );
};

const WithHeader: React.FC<{
  place: SectionResult["headerPosition"];
  header: headerRichTextQueryResult;
}> = ({ children, place = "l", header }) => {
  return (
    <>
      <div
        className={clsx("md:flex gap-12 ", {
          " md:flex-row-reverse ": place === "r",
        })}
      >
        <div
          className={clsx(" mb-6   shrink-0 ", {
            "md:text-right md:w-1/4": place !== "r",
            "md:text-right md:w-1/2": place === "l-1/2",
          })}
        >
          <RichText content={header} />
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default SectionBlock;
