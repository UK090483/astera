import { LinkProps, ConditionalLink } from "@components/Link";
import clsx from "clsx";
import { ListingItem } from "PageBuilder/Components/Listing/listing.query";
import * as React from "react";
import { CardContextProvider } from "./CardContext";

interface ICardWrapProps extends LinkProps, ListingItem {
  variant?: "vertical" | "horizontal";
  noLink?: boolean;
  index?: number;
  className?: string;
  elevate?: boolean;
}

const CardWrap: React.FunctionComponent<ICardWrapProps> = (props) => {
  const {
    variant = "vertical",
    children,
    noLink = false,
    index,
    className,
    elevate,
    slug,
    ...rest
  } = props;

  const odd = !!(index && index % 2);

  return (
    <CardContextProvider slug={slug} {...rest}>
      <ConditionalLink
        condition={!noLink}
        className={clsx(
          "flex flex-col ",
          {
            "md:flex-row-reverse": odd && variant === "horizontal",
            "md:flex-row": !odd && variant === "horizontal",
            "bg-primary-light": rest.bgColor === "primary",
            "bg-secondary-light": rest.bgColor === "secondary",
            "shadow-2xl": elevate,
          },
          className
        )}
        internal={slug}
        {...rest}
      >
        {children}
      </ConditionalLink>
    </CardContextProvider>
  );
};

export default CardWrap;
