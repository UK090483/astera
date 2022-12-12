import { AIcon } from "@components/AIcon";
import { BackButton } from "@components/BackButton";

import Section from "@components/Section/Section";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";

import * as React from "react";

export interface IPersonSectionProps {}

export function NewsSection(props: IPersonSectionProps) {
  const { data } = usePageBuilderContext();

  if (data?._type !== "news") return null;

  const date = data?.startDate;
  const title = data?.title;
  const image = data?.mainImage;
  const listingLink = data?.newsListingLink;

  return (
    <Section width="l" className="" bottomSpace="none">
      <BackButton
        internal={listingLink?.slug}
        onPageLink={listingLink?.onPageLink}
      />

      <div className="flex">
        <AIcon className=" w-12 flex-shrink-0 " />
        <h1 className=" ml-6 typo-body  text-2xl text-secondary-dark  ">
          {title}
        </h1>
      </div>

      <p className="mt-8 text-secondary text-2xl font-bold"> {date}</p>
    </Section>
  );
}
