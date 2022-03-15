import React, { useState } from "react";
import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import { useRouter } from "next/router";
import Filter from "../Default/Filter";

import EventsListItem from "./EventsListItem";
import { parseItem } from "./helper";

interface IEventsListProps {
  items?: any[] | null;
  filterItems?: { label: string; value: string }[];
  accordion?: boolean;
  title?: string | null;
  hideDoneEvents?: boolean | null;
}

const EventsList: React.FunctionComponent<IEventsListProps> = (props) => {
  const { items, filterItems, accordion, title, hideDoneEvents } = props;
  const { locale } = useRouter();
  const [filter, setFilter] = useState("all");

  const now = new Date().toISOString().slice(0, 10);

  const handleFilterChange = (i: { label: string; value: string }) => {
    setFilter(i.value);
  };

  return (
    <>
      {title && (
        <Section width="m">
          <Typo variant="h3" className=" uppercase pb-12  pt-6 md:pt-12 ">
            {title}
          </Typo>
        </Section>
      )}
      {filterItems && accordion && (
        <Section width="m" as="div">
          <Filter
            active={filter}
            onChange={handleFilterChange}
            items={filterItems}
          />
        </Section>
      )}
      <ul className="w-full pb-9 md:pb-20">
        <div>
          {items?.map((i) => {
            const preparedProps = parseItem(i, now);
            if (filter !== "all" && preparedProps?.tags !== filter) return null;
            if (preparedProps.done && hideDoneEvents) return null;
            return (
              <EventsListItem
                locale={locale}
                key={i._id}
                {...preparedProps}
                accordion={accordion}
              />
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default EventsList;
