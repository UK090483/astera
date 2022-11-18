import * as React from "react";
import { useCardContext } from "./CardContext";

export interface ICardSubTitleProps {
  className?: string;
}
export const CardSubTitle: React.FunctionComponent<ICardSubTitleProps> = () => {
  const { subTitle } = useCardContext();

  return <p className="">{subTitle}</p>;
};
