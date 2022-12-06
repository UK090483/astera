import clsx from "clsx";
import * as React from "react";
import { useCarouselContext } from "./CarouselContext";

type TitleDotsProps = {
  className?: string;
};

const TitleDots: React.FC<TitleDotsProps> = (props) => {
  const { className } = props;
  const { itemCount, activeItemIndex, set } = useCarouselContext();
  const TitleDots = React.useMemo(
    () => new Array(itemCount).fill("a"),
    [itemCount]
  );
  if (itemCount < 2) return <></>;
  return (
    <div
      aria-hidden={true}
      className={`flex flex-col justify-center  min-w-[200px]  items-center  gap-2 ${
        className ? className : ""
      }`}
    >
      {TitleDots.map((i, index) => {
        const dotActive = activeItemIndex === index;

        const dotClose = Math.abs(activeItemIndex - index) > 0;

        console.log({ dotClose, m: Math.abs(activeItemIndex - index) });

        return (
          <div
            className={clsx("bg-primary rounded-full transition-all  ", {
              "bg-opacity-10 p-4": dotActive,
              "bg-opacity-0": !dotActive,
              //   "scale-0": !dotClose,
              //   "scale-100": dotClose,
            })}
            key={index}
          >
            <div
              className={clsx("bg-primary rounded-full  transition-all", {
                "bg-opacity-25 p-4": dotActive,
                "bg-opacity-0": !dotActive,
              })}
            >
              <div
                onClick={() => set(index)}
                className={`w-20 h-20 mx-0.5 bg-primary rounded-full  transition-colors `}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TitleDots;
