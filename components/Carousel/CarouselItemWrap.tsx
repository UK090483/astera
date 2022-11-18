import clsx from "clsx";
import * as React from "react";

import { useCarouselContext } from "./CarouselContext";

interface ICarouselItemWrapProps {
  nextOnClick?: boolean;
  className?: string;
  children: (props: {
    activeItemIndex: number;
    lastActiveItemIndex: null | number;
  }) => React.ReactElement | React.ReactElement[];
}

function CarouselItemWrap(props: ICarouselItemWrapProps) {
  const { children, nextOnClick = true, className } = props;
  const { activeItemIndex, lastActiveItemIndex, next } = useCarouselContext();

  return (
    <ul
      onClick={() => nextOnClick && next()}
      className={className || clsx("w-full grid grid-cols-1 grid-rows-1")}
    >
      {children && children({ activeItemIndex, lastActiveItemIndex })}
    </ul>
  );
}

export default CarouselItemWrap;
