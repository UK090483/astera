import { BackButton } from "@components/BackButton";
import Card from "@components/Card/Card";
import SanityImage from "@components/SanityImage";
import Section from "@components/Section/Section";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";
import { testimonialItem } from "PageBuilder/Objects/Testimonial/testimonialItem.type";
import * as React from "react";

export interface IPersonSectionProps {}

export function PersonSection(props: IPersonSectionProps) {
  const { data } = usePageBuilderContext();

  if (data?._type !== "person") return null;

  const description = data?.description;
  const title = data?.title;
  const image = data?.mainImage;
  const accomplishments = data?.accomplishments;

  return (
    <Section width="l">
      <BackButton />
      <div className="md:flex md:flex-row-reverse gap-24 ">
        <div className=" relative w-full ">
          <div className=" overflow-hidden rounded-full w-72 h-72 lg:w-[450px]  lg:h-[450px]  mx-auto  relative  mb-12 md:mb-0 ">
            <SanityImage src={image} />
          </div>
        </div>
        <div>
          <h1 className="garamondFont header1Serif">{title}</h1>
          <p>{description}</p>
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
    <div className=" bg-secondary-light  p-8">
      <p className=" font-bold mb-0">{title}</p>
      <p>{description}</p>

      <p className=" text-secondary text-base">{source}</p>
    </div>
  );
};
