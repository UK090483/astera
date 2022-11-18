import * as React from "react";
import { useCardContext } from "./CardContext";

export interface ICardTitleProps {
  className?: string;
}
export const CardTitle: React.FunctionComponent<ICardTitleProps> = ({
  className,
}) => {
  const { title } = useCardContext();

  return (
    <h2 className={`typo-body text-secondary-dark  p-size   ${className}`}>
      {title}
    </h2>
  );
};
