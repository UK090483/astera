import { AIcon, CategoryAIcon } from "@components/AIcon";
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
    <CategoryAIcon
      category={category}
      white={white}
      className={clsx("w-12 shrink-0")}
    />
  );
};
