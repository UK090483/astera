import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider, KeenSliderOptions } from "keen-slider/react";
import { useTimeoutFn } from "react-use";

type KeenSliderProps = {};

interface ICarouselProps extends Omit<KeenSliderProps, "items"> {
  children: React.ReactElement[];
  options?: KeenSliderOptions;
  dots?: boolean;
  className?: string;
}

function Carousel(props: ICarouselProps) {
  const { children, options, className, dots = false } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    ...options,
  });

  useTimeoutFn(() => {
    instanceRef.current?.update();
  }, 500);

  return (
    <>
      <div ref={sliderRef} className={clsx("keen-slider", className)}>
        {children.map((i, index) => {
          return React.cloneElement(
            { ...i, type: "div" },
            {
              className: clsx("keen-slider__slide ", i.props?.className),
            }
          );
        })}
      </div>
      {dots && loaded && instanceRef.current && (
        <div
          aria-hidden={true}
          className={`flex justify-start pl-12 items-start pb-12 gap-2 ${
            className ? className : ""
          }`}
        >
          {[...instanceRef.current.track.details.slides].map((i, index) => (
            <div
              onClick={() => instanceRef.current?.moveToIdx(index)}
              key={index}
              className={`w-3 h-3 mx-0.5 rounded-full border-[0.5px] transition-colors border-current bg-white ${
                currentSlide === index ? "" : " opacity-40 "
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Carousel;
