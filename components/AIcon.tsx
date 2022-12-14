import clsx from "clsx";
import * as React from "react";

export interface IAIconProps {
  className?: string;
}
export function AIcon(props: IAIconProps) {
  const { className } = props;

  return (
    <svg
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ` w-10 `}
    >
      <path d="M24.7346 17.771C26.0074 20.6647 26.7477 21.9456 27.995 22.4845C29.2679 20.2793 30 17.7222 30 14.9926C30 7.43874 24.4211 1.19095 17.1611 0.142416L24.7346 17.771Z" />
      <path d="M18.4381 13.572L14.5909 4.6486L10.7438 13.572H18.4381Z" />
      <path d="M17.3888 24.0707V22.8454C21.5869 22.8454 21.9948 21.8538 20.5378 18.4128L19.3711 15.7297H9.81074L8.64414 18.4128C7.18708 21.8538 7.18708 22.8454 11.793 22.8454V24.0707H3.05762C5.79743 27.673 10.1264 30 15 30C19.8735 30 24.2025 27.6729 26.9423 24.0707H17.3888H17.3888Z" />
      <path d="M6.77937 17.771L14.414 0C6.40175 0.308392 0 6.90084 0 14.9926C0 17.8462 0.796343 20.5135 2.17826 22.7848C4.51316 22.5496 5.14371 21.4895 6.77937 17.771Z" />
    </svg>
  );
}

export const CategoryAIcon: React.FC<{
  category?: string;
  white?: boolean;
  className?: string;
}> = ({ category, white, className }) => {
  return (
    <AIcon
      className={clsx(className, {
        "fill-primary": category === "financeDeal",
        "fill-secondary": category === "privateEquityDeal",
        "fill-bordeaux ": category === "event",
        "fill-secondary-dark": category === "other" || category === "person",
        "fill-white": white,
      })}
    />
  );
};
