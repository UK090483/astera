import clsx from "clsx";
import * as React from "react";
import { CarouselContextProvider } from "./CarouselContext";
import CarouselItemWrap from "./CarouselItemWrap";
import Dots from "./Dots";

import { useCarouselProps } from "./useCarousel";

interface ICarouselProps extends Omit<useCarouselProps, "items"> {
  children: React.ReactElement[];
}

function Carousel(props: ICarouselProps) {
  const { children, ...rest } = props;

  return (
    <CarouselContextProvider items={children} {...rest}>
      <div className="w-full flex overflow-hidden pb-12">
        <CarouselItemWrap>
          {({ activeItemIndex, lastActiveItemIndex }) => {
            return children.map((i, index) => {
              return React.cloneElement(
                { ...i, type: "li" },
                {
                  ["aria-hidden"]: activeItemIndex === index ? "false" : "true",
                  className: clsx(
                    i.props?.className,
                    " col-start-1 col-span-1 row-start-1 row-span-1 transition-all ",
                    {
                      "opacity-100 translate-x-0 duration-500":
                        activeItemIndex === index,
                      "opacity-0 -translate-x-full duration-0":
                        lastActiveItemIndex === index,
                      "opacity-0 translate-x-full":
                        activeItemIndex !== index &&
                        lastActiveItemIndex !== index,
                    }
                  ),
                }
              );
            });
          }}
        </CarouselItemWrap>
      </div>

      <Dots />
    </CarouselContextProvider>
  );
}

export default Carousel;

export const chunkItems = (items: any[], chunkSize: number = 3) => {
  const res = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    res.push(chunk);
    // do whatever
  }
  return res;
};
