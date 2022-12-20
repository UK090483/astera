import useDate from "@hooks/useDate";
import * as React from "react";
import { useCardContext } from "./CardContext";

interface ICardDateProps {}
export const CardDate: React.FunctionComponent<ICardDateProps> = (props) => {
  const { startDate } = useCardContext();

  const dateString = useDate({ date: startDate });

  if (!dateString) return null;

  return (
    <p className=" bg-primary w-fit text-white px-2 font-bold">{dateString}</p>
  );
};
