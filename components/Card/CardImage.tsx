import SanityImage from "@components/SanityImage";
import Typo from "@components/Typography/Typography";
import clsx from "clsx";
import React, { useMemo } from "react";
import { useCardContext } from "./CardContext";

interface ICardImageProps {
  variant?: "aspect" | "round" | "square" | "intrinsic" | "fillContainer";
  showTitle?: boolean;
  elevated?: boolean;
  half?: boolean;
  className?: string;
}

const CardImage: React.FunctionComponent<ICardImageProps> = (props) => {
  const { variant = "aspect", showTitle, elevated, half, className } = props;
  const { mainImage, title } = useCardContext();

  const longestWord = useMemo(
    () =>
      title
        ? title.split(" ").reduce((acc, item) => {
            if (item.length > acc) return item.length;
            return acc;
          }, 0)
        : 0,
    [title]
  );

  if (!mainImage) return null;

  return (
    <div className={clsx("w-full ", { "md:w-1/2": half, "mb-8": !half })}>
      <div
        className={clsx(
          "overflow-hidden relative typo-bright flex justify-center items-center",
          {
            "w-full aspect-w-3 aspect-h-2": variant === "aspect",
            "w-full aspect-w-1 aspect-h-1": variant === "square",
            "w-60 h-60 mx-auto rounded-full": variant === "round",
            "w-full h-full ": variant === "fillContainer",
            "w-full": variant === "intrinsic",
            "shadow-xl": elevated,
          },
          className
        )}
      >
        <SanityImage
          src={mainImage}
          fill={variant !== "intrinsic"}
          className="object-cover"
          sizes="600px"
        />

        {showTitle && (
          <div className="absolute text-center inset-0 flex justify-center items-center">
            <Typo
              as="h2"
              className={clsx("lg:text-7xl", {
                "text-4xl ": longestWord >= 9,
                "text-6xl ": longestWord < 9,
              })}
            >
              {title}
            </Typo>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardImage;
