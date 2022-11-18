import * as React from "react";
import { useCardContext } from "./CardContext";

interface ICardDescriptionProps {
  widthDate?: boolean;
  small?: boolean;
}
export const CardDescription: React.FunctionComponent<
  ICardDescriptionProps
> = ({ widthDate, small }) => {
  const { description, startDate } = useCardContext();

  const dateString = startDate
    ? new Date(startDate).toLocaleDateString("de")
    : "date Missing";

  return (
    <p className={`${small && "text-base"} `}>
      {widthDate && (
        <span className=" text-secondary   font-bold pr-1">{dateString}</span>
      )}
      {description}
    </p>
  );
};
