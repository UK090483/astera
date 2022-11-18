import { AIcon } from "@components/AIcon";
import * as React from "react";
import { useCardContext } from "./CardContext";

export interface ICardCategoryProps {}

export const CardCategory: React.FC<ICardCategoryProps> = (props) => {
  const { category } = useCardContext();
  if (!category) return null;

  return (
    <div>
      {category === "financeDeal" && <AIcon className=" fill-secondary" />}
      {category === "privateEquityDeal" && <AIcon className="fill-primary " />}
      {category === "event" && <AIcon className="fill-primary " />}
      {category === "person" && <AIcon className="fill-secondary-dark " />}
    </div>
  );
};
