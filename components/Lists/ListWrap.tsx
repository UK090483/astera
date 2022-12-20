import useButtonStyle from "@components/Button/useButtonStyle";
import Carousel from "@components/Carousel/KeenSlider";
import { LoadMoreBtn } from "@components/LoadMoreBtn";
import { KeenSliderOptions } from "keen-slider/react";
import clsx from "clsx";
import { useRouter } from "next/router";
import useLoadMore from "PageBuilder/Components/Listing/frontend/useLoadMore";
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
  contentType?: string;
  hasLoadMore?: boolean;
}

const carouselOptions: KeenSliderOptions = {
  mode: "free-snap",
  renderMode: "performance",
  breakpoints: {
    "(min-width: 800px)": {
      slides: {
        perView: 2.5,
        spacing: 30,
      },
    },
    "(min-width: 1200px)": {
      slides: {
        perView: 3.5,
        spacing: 30,
      },
    },
  },
  slides: {
    perView: 1.5,
    spacing: 30,
  },
};

function ListWrap<T>(props: IListWrapAutoProps<T>) {
  const {
    children,
    columns = 3,
    columnsMobile = 1,
    items,
    useKey,
    variant = "grid",
    noGap,
    contentType,
    hasLoadMore,
  } = props;

  const [_items, setItems] = React.useState(items);
  const { locale } = useRouter();

  React.useEffect(() => {
    setItems(items);
  }, [items, locale]);

  const { loadMore, loading, hasMore } = useLoadMore<T>({
    items: _items,
    setItems,
    contentType,
    orderKey: "startDate",
    orderDir: "asc",
  });

  if (variant === "carousel") {
    return (
      <Carousel options={carouselOptions}>
        {_items &&
          _items.map((i, index) => (
            <li key={i[useKey] as string | number}>
              {children({ ...i, index })}
            </li>
          ))}
      </Carousel>
    );
  }

  return (
    <>
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
        {_items &&
          _items.map((i, index) => (
            <li key={i[useKey] as string | number}>
              {children({ ...i, index })}
            </li>
          ))}
      </ul>
      {hasLoadMore && hasMore && (
        <LoadMoreBtn loading={loading} onClick={() => loadMore()} />
      )}
    </>
  );
}

const List = { wrap: ListWrap };
export default List;
