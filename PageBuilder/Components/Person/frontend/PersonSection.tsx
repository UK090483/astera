import { BackButton } from "@components/BackButton";
import Card from "@components/Card/Card";
import SanityImage from "@components/SanityImage";
import Section from "@components/Section/Section";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";
import { testimonialItem } from "PageBuilder/Objects/Testimonial/testimonialItem.query";
import * as React from "react";

export interface IPersonSectionProps {}

export function PersonSection(props: IPersonSectionProps) {
  const { data } = usePageBuilderContext();

  if (data?._type !== "person") return null;

  const description = data?.description;
  const title = data?.title;
  const image = data?.mainImage;
  const accomplishments = data?.accomplishments;
  const listingLink = data?.personListingLink;

  return (
    <Section bottomSpace="none" width="l">
      <BackButton
        internal={listingLink?.slug}
        onPageLink={listingLink?.onPageLink}
      />
      <div className="md:flex md:flex-row-reverse gap-24 ">
        <div className=" relative w-full ">
          <div className=" overflow-hidden rounded-full w-72 h-72 lg:w-[350px]  lg:h-[350px]  mx-auto  relative  mb-12 md:mb-0 ">
            <SanityImage src={image} fill />
          </div>
        </div>
        <div className="w-full">
          <h1 className="garamondFont header1Serif">{title}</h1>
          <p className="text-lg ">{description}</p>
          {accomplishments &&
            accomplishments.map((i, index) => (
              <Accomplishment key={index} {...i} />
            ))}
        </div>
      </div>
    </Section>
  );
}

const Accomplishment: React.FC<testimonialItem> = (props) => {
  const { title, description, source } = props;
  return (
    <div className=" bg-secondary-medium p-8 relative">
      <div className="garamondFont text-8xl text-secondary absolute -top-20 right-4  ">
        {"„"}
      </div>
      <p className="font-bold mb-0">{title}</p>
      <p>{description}</p>
      <p className=" text-secondary text-base">{source}</p>
    </div>
  );
};
