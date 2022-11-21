import { PortableTextComponent } from "@portabletext/react";
import React, { useMemo } from "react";
import { dealsPlugResult } from "../deals.query";
import Card from "@components/Card/Card";
import clsx from "clsx";

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
      {Object.entries(years).map(([year, items]) => {
        if (!items) return null;
        return (
          <Accordion key={year} title={year}>
            {items.map((card) => {
              return (
                <Card.Wrap
                  noLink
                  key={card._id}
                  {...card}
                  className={clsx(" p-8 flex flex-col  justify-between", {
                    "bg-primary":
                      card.category === "financeDeal" ||
                      card.category !== "privateEquityDeal",
                    " bg-secondary-dark ":
                      card.category === "privateEquityDeal",
                  })}
                >
                  <div className=" flex gap-4 justify-between items-start">
                    <Card.Title className=" line-clamp-2 h-[60px] text-white" />
                    <Card.Category white />
                  </div>

                  <Card.Description widthDate className="text-white" />
                  <Card.Link className="text-white" />
                </Card.Wrap>
              );
            })}
          </Accordion>
        );
      })}
    </>
  );
};

export default DealsPlug;

const Accordion: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className=" w-full block text-secondary ">
      <div className="flex mb-6">
        <h2 className="mb-0 text-5xl">{title}</h2>
        <div className="w-full h-11 ml-4 border-b-2 border-secondary"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
};
