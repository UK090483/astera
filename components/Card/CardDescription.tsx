import * as React from "react";
import { useCardContext } from "./CardContext";

interface ICardDescriptionProps {
  widthDate?: boolean;
  small?: boolean;
  className?: string;
}
export const CardDescription: React.FunctionComponent<
  ICardDescriptionProps
> = ({ widthDate, small, className }) => {
  const { description, startDate } = useCardContext();

  const dateString = startDate
    ? new Date(startDate).toLocaleDateString("de")
    : "date Missing";

  return (
    <p className={`${small && "text-base"} ${className && className}`}>
      {widthDate && <span className={`font-bold pr-1 `}>{dateString}</span>}
      {description}
    </p>
  );
};
