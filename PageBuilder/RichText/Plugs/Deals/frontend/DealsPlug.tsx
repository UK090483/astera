import { PortableTextComponent } from "@portabletext/react";
import React, { ReactElement, useMemo } from "react";
import { dealsPlugResult } from "../deals.query";

import clsx from "clsx";
import useAccordion from "@hooks/useAccordion/useAccordion";
import { NewsCard } from "PageBuilder/ContentTypes/news/frontend/NewsCard";

const DealsPlug: PortableTextComponent<dealsPlugResult> = (props) => {
  const { value } = props;

  const years = useMemo(
    () =>
      (value.items ? value.items : []).reduce((acc, item) => {
        const year = item.startDate?.slice(0, 4);
        if (!year) return acc;
        if (!item) return acc;
        if (!acc[year]) {
          acc[year] = [item];
          return acc;
        }
        const now = acc[year];
        if (!now) return acc;
        acc[year] = [...now, item];
        return acc;
      }, {} as { [k: string]: dealsPlugResult["items"] }),
    [value.items]
  );

  return (
    <>
      {Object.entries(years)
        .reverse()
        .map(([year, items], index) => {
          if (!items) return null;
          return (
            <Accordion key={year} title={year} isFirst={index === 0}>
              {(isOpen) => {
                return items.map((card) => {
                  return (
                    <NewsCard
                      key={card._id}
                      showLink={isOpen}
                      {...card}
                      variant="monochrome"
                    />
                  );
                });
              }}
            </Accordion>
          );
        })}
    </>
  );
};

export default DealsPlug;

const Accordion: React.FC<{
  title: string;
  isFirst?: boolean;
  children: (isOpen: boolean) => ReactElement | ReactElement[];
}> = ({ title, children, isFirst }) => {
  const { ref, toggle, maxHeight, isOpen } = useAccordion({
    initOpen: isFirst,
  });

  return (
    <div
      className={clsx("w-full block text-secondary ", { "mt-12": !isFirst })}
    >
      <h2 onClick={toggle} className="text-5xl flex mb-6 font-thin">
        {title}
        <button
          id={title + "_label"}
          type="button"
          aria-expanded={isOpen}
          aria-controls={title}
          className="w-full h-11 ml-4 border-b-2 border-secondary flex justify-end -translate-y-0.5 "
        >
          <OpenIndicator
            className={clsx("translate-y-1 rotate-180", {
              "rotate-0 transition-transform ": isOpen,
            })}
          />
        </button>
      </h2>

      <div
        aria-labelledby={title + "_label"}
        id={title}
        style={{ maxHeight }}
        className="transition-all max-h-0 overflow-hidden"
      >
        <ul
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden list-none"
        >
          {children(isOpen)}
        </ul>
      </div>
    </div>
  );
};

const OpenIndicator = (props: { className?: string }) => (
  <svg
    width="101"
    height="47"
    viewBox="0 0 35 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx("fill-primary w-8 ", props.className)}
  >
    <path d="M17.52 0L0 20H35L17.52 0Z" />
  </svg>
);
