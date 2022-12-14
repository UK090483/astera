import clsx from "clsx";
import SanityImage from "@components/SanityImage";
import { PortableTextComponent } from "@portabletext/react";

import { imagePlugResult } from "../ImagePlug.query";

import React from "react";

const sizesMap = {
  "1/4": 25,
  "1/3": 33,
  "1/2": 50,
  "2/3": 66,
  full: 100,
};

const ImagePlug: PortableTextComponent<imagePlugResult> = (props) => {
  const {
    image,
    customWidth = "1/4",
    ratio = "auto",
    float = false,
    position = "center",
  } = props.value;

  const hasRatio = ratio && ratio !== "auto";

  if (!image || !image.url) return null;

  return (
    <div
      className={clsx({
        "w-full sm:w-1/4": customWidth === "1/4",
        "w-full sm:w-1/3": customWidth === "1/3",
        "w-full sm:w-1/2": customWidth === "1/2",
        "w-full sm:w-2/3": customWidth === "2/3",
        "w-full": customWidth === "full",
        "mx-auto": !float && (position === "center" || position === null),
        "ml-auto": !float && position === "right",
        "mb-6 md:mb-12": !float,
        "float-right ml-8 mb-2": float && position === "right",
        "float-left mr-8 mb-2": float && ["left", "center"].includes(position),
      })}
    >
      <AspectBox ratio={ratio}>
        <SanityImage
          src={image}
          className={clsx({ " object-cover ": hasRatio })}
          fill={hasRatio}
          sizes={`(max-width: 350px) 350px ,(max-width: 640px) 100vw, ${sizesMap[customWidth]}vw`}
        />
      </AspectBox>
    </div>
  );
};

export default ImagePlug;

const AspectBox: React.FC<{ ratio?: imagePlugResult["ratio"] }> = (props) => {
  const { children, ratio } = props;
  if (!ratio || ratio === "auto") {
    return <>{children}</>;
  }
  return (
    <div
      className={clsx("relative", {
        "aspect-w-3 aspect-h-2": ratio === "3:2",
        "aspect-w-5 aspect-h-9": ratio === "5:9",
        "aspect-w-16 aspect-h-9": ratio === "16:9",
        "aspect-w-1 aspect-h-1": ratio === "1:1",
      })}
    >
      {children}
    </div>
  );
};
