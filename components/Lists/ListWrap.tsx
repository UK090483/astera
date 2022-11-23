import Carousel from "@components/Carousel/CarouselCss";

import clsx from "clsx";
import * as React from "react";

interface IListWrapProps {
  columns?: number;
  columnsMobile?: number;
  variant?: "grid";
  children: React.ReactNode;
}

interface IListWrapAutoProps<T extends unknown = {}> {
  columns?: number;
  columnsMobile?: number;
  variant?: "grid" | "carousel";
  items: T[];
  useKey: keyof T;
  noGap?: boolean;
  children: (props: T & { index: number }) => React.ReactNode;
}

function ListWrap<T>(props: IListWrapAutoProps<T>) {
  const {
    children,
    columns = 3,
    columnsMobile = 1,
    items,
    useKey,
    variant = "grid",
    noGap,
  } = props;

  if (variant === "carousel") {
    return (
      <Carousel>
        {items &&
          items.map((i, index) => (
            <li key={i[useKey] as string | number}>
              {children({ ...i, index })}
            </li>
          ))}
      </Carousel>
    );
  }

  return (
    <ul
      className={clsx("grid grid-flow-row  list-none", {
        "grid-cols-1": columnsMobile === 1,
        "grid-cols-2": columnsMobile === 2,
        "grid-cols-3": columnsMobile === 3,
        "grid-cols-4": columnsMobile === 4,
        "md:grid-cols-1": columns === 1,
        "md:grid-cols-2": columns === 2,
        "sm:grid-cols-2 lg:grid-cols-3": columns === 3,
        "md:grid-cols-4": columns === 4,
        "md:grid-cols-5": columns === 5,
        "md:grid-cols-6": columns === 6,
        "md:grid-cols-7": columns === 7,
        "md:grid-cols-8": columns === 8,
        "gap-8": !noGap,
      })}
    >
      {items &&
        items.map((i, index) => (
          <li key={i[useKey] as string | number}>
            {children({ ...i, index })}
          </li>
        ))}
    </ul>
  );
}

const List = { wrap: ListWrap };
export default List;
