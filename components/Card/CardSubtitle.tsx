import clsx from "clsx";
import * as React from "react";
import { useCardContext } from "./CardContext";

export interface ICardSubTitleProps {
  className?: string;
}

export const CardSubTitle: React.FunctionComponent<ICardSubTitleProps> = ({
  className,
}) => {
  const { subTitle } = useCardContext();

  return <p className={clsx(className, " p-sides ")}>{subTitle}</p>;
};
