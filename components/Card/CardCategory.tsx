import { AIcon } from "@components/AIcon";
import clsx from "clsx";
import * as React from "react";
import { useCardContext } from "./CardContext";

export interface ICardCategoryProps {
  className?: string;
  white?: boolean;
}

export const CardCategory: React.FC<ICardCategoryProps> = ({ white }) => {
  const { category } = useCardContext();
  if (!category) return null;

  return (
    <AIcon
      className={clsx("w-12 shrink-0 ", {
        "fill-primary": category === "financeDeal",
        "fill-secondary": category === "privateEquityDeal",
        "fill-bordeaux ": category === "event",
        "fill-secondary-dark": category === "other" || category === "person",
        "fill-white": white,
      })}
    />
  );
};
