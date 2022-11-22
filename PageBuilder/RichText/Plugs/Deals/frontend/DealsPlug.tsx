import { PortableTextComponent } from "@portabletext/react";
import React, { ReactElement, useMemo } from "react";
import { dealsPlugResult } from "../deals.query";
import Card from "@components/Card/Card";
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
      onClick={toggle}
      className={clsx("w-full block text-secondary ", { "mt-12": !isFirst })}
    >
      <div className="flex mb-6">
        <h2 className="mb-0 text-5xl">{title}</h2>
        <button className="w-full h-11 ml-4 border-b-2 border-secondary flex justify-end">
          <OpenIndicator
            className={clsx({ "rotate-180 transition-transform": isOpen })}
          />
        </button>
      </div>
      <div
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
    viewBox="0 0 101 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx("fill-current w-9 ", props.className)}
  >
    <path d="M50.5 0L94.2343 35.25H6.76572L50.5 0Z" />
  </svg>
);
