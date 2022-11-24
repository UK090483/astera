/* eslint-disable @next/next/no-img-element */

import SanityImage from "@components/SanityImage";
import clsx from "clsx";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";
import RichText from "PageBuilder/RichText/frontend/RichText";
import React from "react";
import { heroResult } from "../hero.query";

const Hero: React.FC<heroResult> = (props) => {
  const { image, content } = props;

  const { data } = usePageBuilderContext();

  const _image = image && image.url ? image : data?.mainImage;

  const hasContent = content && content.length > 0;

  return (
    <div
      data-testid="heroBlock"
      className={clsx(
        "flex flex-col pt-11 lg:pt-16 relative justify-center items-center h-[300px] ",
        { "h-[500px] md:h-[600px]": hasContent }
      )}
    >
      {_image && (
        <SanityImage priority fill className=" object-cover " src={_image} />
      )}
      {hasContent && (
        <div className="typo typo-bright max-w-3xl px-sides  flex flex-col items-center text-center justify-center  mx-auto  absolute inset-0 mt-36">
          {content && <RichText content={content} />}
        </div>
      )}
    </div>
  );
};

export default Hero;
