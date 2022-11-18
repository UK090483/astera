import * as React from "react";
import { useCardContext } from "./CardContext";

interface ICardDateProps {}
export const CardDate: React.FunctionComponent<ICardDateProps> = (props) => {
  const { startDate } = useCardContext();

  if (!startDate) return null;

  const dateString = startDate
    ? new Date(startDate).toLocaleDateString("de")
    : "date Missing";
  return (
    <p className=" bg-primary w-fit text-white px-2 font-bold">{dateString}</p>
  );
};
