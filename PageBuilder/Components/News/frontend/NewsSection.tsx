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

  return (
    <Section width="l" className="">
      <BackButton />
      {/* <div className=" relative w-full ">
        <div className=" overflow-hidden rounded-full w-72 h-72 lg:w-[450px]  lg:h-[450px]  mx-auto  relative  mb-12">
          <SanityImage src={image} />
        </div>
      </div> */}

      <div className="flex">
        <AIcon />
        <h1 className=" ml-6 typo-body  text-2xl text-secondary-dark  ">
          {title}
        </h1>
      </div>

      <p className="mt-8 text-secondary font-bold"> {date}</p>
    </Section>
  );
}
