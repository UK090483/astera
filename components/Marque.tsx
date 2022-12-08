import useInViewport from "@hooks/useInViewport";
import clsx from "clsx";

import React from "react";

interface IMarqueProps<T extends unknown> {
  items: T[];
  children: (item: T, index: number) => React.ReactElement;
  className?: string;
  reverse?: boolean;
}

function Marque<T>(props: IMarqueProps<T>) {
  const { items, children, className, reverse = false } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(ref);

  const getParts = React.useMemo(
    () => items.map((item, index) => children(item, index)),
    [children, items]
  );

  return (
    <div
      style={{ borderBottomWidth: 1 }}
      aria-hidden={true}
      ref={ref}
      className={clsx(
        "flex overflow-x-hidden w-full  border-secondary-dark whitespace-nowrap",
        className
      )}
    >
      <div
        className={clsx({
          "motion-reduce:animate-none animate-marquee-reverse":
            inViewport && reverse,
          "motion-reduce:animate-none animate-marquee": inViewport && !reverse,
        })}
      >
        {getParts}
      </div>
      <div
        className={clsx({
          "motion-reduce:animate-none animate-marquee-reverse":
            inViewport && reverse,
          "motion-reduce:animate-none animate-marquee": inViewport && !reverse,
        })}
      >
        {getParts}
      </div>
    </div>
  );
}

export default Marque;
