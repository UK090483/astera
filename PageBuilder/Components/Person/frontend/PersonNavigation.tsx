import { BackButton } from "@components/BackButton";

import Section from "@components/Section/Section";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";

import * as React from "react";

export interface IPersonSectionProps {}

export function PersonNavigation(props: IPersonSectionProps) {
  const { data } = usePageBuilderContext();

  if (data?._type !== "person") return null;

  const prev = data.prevItem;
  const next = data.nextItem;

  return (
    <Section
      topSpace="none"
      width="l"
      className="flex flex-wrap md:flex-nowrap w-full  "
    >
      <div>
        {prev && <BackButton internal={prev?.slug}>{prev.title}</BackButton>}
      </div>
      <div className=" ml-auto ">
        {next && (
          <BackButton direction="right" internal={next?.slug}>
            {next.title}
          </BackButton>
        )}
      </div>
    </Section>
  );
}

export default PersonNavigation;
