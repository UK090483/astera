import useDate from "@hooks/useDate";
import clsx from "clsx";
import * as React from "react";
import { useCardContext } from "./CardContext";

interface ICardDescriptionProps {
  widthDate?: boolean;
  small?: boolean;
  className?: string;
  isMonoChrome?: boolean;
}
export const CardDescription: React.FunctionComponent<
  ICardDescriptionProps
> = ({ widthDate, small, className, isMonoChrome }) => {
  const { description, startDate } = useCardContext();

  const dateString = useDate({ date: startDate });

  return (
    <p className={`${small && "text-base"} ${className && className}`}>
      {widthDate && (
        <span
          className={clsx(`font-bold pr-1`, {
            "text-secondary": !isMonoChrome,
          })}
        >
          {dateString}
        </span>
      )}
      {description}
    </p>
  );
};
