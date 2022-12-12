import { BackButton } from "@components/BackButton";

import Section from "@components/Section/Section";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";

import * as React from "react";

export interface IPersonSectionProps {}

export function PersonNavigation(props: IPersonSectionProps) {
  const { data } = usePageBuilderContext();

  console.log(data);

  if (data?._type !== "person") return null;

  const prev = data.prevItem;
  const next = data.nextItem;

  const listingLink = data?.personListingLink;

  return (
    <Section topSpace="none" width="l" className="flex w-full justify-between">
      <div>
        {prev && <BackButton internal={prev?.slug}>{prev.title}</BackButton>}
      </div>
      <div>
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
