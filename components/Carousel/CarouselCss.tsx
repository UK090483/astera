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

  const ref = React.useRef<HTMLDivElement>(null);

  const { handleScroll, showNext, showPrev, next, prev } = useCssCarousel({
    ref,
  });

  return (
    <CarouselContextProvider items={children} {...rest}>
      <div
        onScroll={handleScroll}
        ref={ref}
        className="w-full flex overflow-scroll pl-side py-4"
      >
        <CarouselItemWrap className="flex items-center gap-12 px-16">
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
      </div>
      <div className="flex ">
        {showPrev && <button onClick={next}>Prev</button>}
        {showNext && (
          <button onClick={prev} className="ml-auto">
            Next
          </button>
        )}
      </div>
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
