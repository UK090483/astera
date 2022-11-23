import SanityImage from "@components/SanityImage";
import clsx from "clsx";
import * as React from "react";
import { useCardContext } from "./CardContext";

interface ICardImageProps {
  variant?: "aspect" | "round" | "square" | "intrinsic";
  showTitle?: boolean;
  elevated?: boolean;
  half?: boolean;
}

const CardImage: React.FunctionComponent<ICardImageProps> = (props) => {
  const { variant = "aspect", showTitle, elevated, half } = props;
  const { mainImage, title } = useCardContext();

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
            "w-full": variant === "intrinsic",
            "shadow-xl": elevated,
          }
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
            <h1>{title}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardImage;
