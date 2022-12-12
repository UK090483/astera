import clsx from "clsx";
import * as React from "react";
import { CarouselContextProvider } from "./CarouselContext";
import CarouselItemWrap from "./CarouselItemWrap";
import Dots from "./Dots";
import { useCarouselProps } from "./useCarousel";
import useCssCarousel from "./useCssCarousel";

interface ICarouselProps extends Omit<useCarouselProps, "items"> {
  children: React.ReactElement[];
}

function Carousel(props: ICarouselProps) {
  const { children, ...rest } = props;

  const ref = React.useRef<HTMLUListElement>(null);

  const { handleScroll } = useCssCarousel({ ref });

  return (
    <CarouselContextProvider items={children} {...rest}>
      <ul
        onScroll={handleScroll}
        ref={ref}
        className="w-full flex overflow-scroll pl-side py-4"
      >
        <CarouselItemWrap className="flex items-center gap-12">
          {({ activeItemIndex }) => {
            return children.map((i, index) => {
              return React.cloneElement(
                { ...i, type: "li" },
                {
                  ["aria-hidden"]: activeItemIndex === index ? "false" : "true",
                  className: clsx(
                    i.props?.className,
                    "w-[80vw] sm:w-[60vw] lg:w-[26vw] 2xl:w-[25vw] h-full",
                    {}
                  ),
                }
              );
            });
          }}
        </CarouselItemWrap>
      </ul>
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
