import Card from "@components/Card/Card";
import clsx from "clsx";

import { ListingItem } from "PageBuilder/Components/Listing/listing.query";
import * as React from "react";

export interface INewsCardProps extends ListingItem {
  variant?: "monochrome";
  showLink?: boolean;
}

export function NewsCard(props: INewsCardProps) {
  const { variant, showLink = true, ...card } = props;
  const isMonochrome = variant === "monochrome";

  return (
    <Card.Wrap
      {...card}
      className={clsx("p-8  h-full", {
        "bg-primary": isMonochrome && card.category === "financeDeal",
        " bg-secondary-dark ":
          isMonochrome && card.category === "privateEquityDeal",
        "border-2": !isMonochrome,
      })}
      noLink
    >
      <Card.Info className="h-full justify-between">
        <div className=" flex gap-4 justify-between items-start">
          <Card.Title
            className={clsx("line-clamp-2 h-[50px] lg:h-[60px] text-lg", {
              "text-white": isMonochrome,
              "text-secondary-dark": !isMonochrome,
            })}
          />
          <Card.Category white={isMonochrome} />
        </div>

        <Card.Description
          widthDate
          className={clsx("line-clamp-3  text-base", {
            "text-white": isMonochrome,
            "text-secondary-dark": !isMonochrome,
          })}
        />
        {showLink && (
          <Card.Link
            className={clsx("text-sm", {
              "text-white": isMonochrome,
            })}
          />
        )}
      </Card.Info>
    </Card.Wrap>
  );
}
