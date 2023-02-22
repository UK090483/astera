import React from "react";
import { listingQueryResult } from "../listing.query";
import Section from "@components/Section/Section";
import { componentStyleResult } from "../../componentStyle";
import List from "@components/Lists/ListWrap";
import Card from "@components/Card/Card";
import RichText from "PageBuilder/RichText/frontend/RichText";
import { NewsCard } from "PageBuilder/ContentTypes/news/frontend/NewsCard";
import { PersonCard } from "PageBuilder/ContentTypes/Person/frontend/PersonCard";
import Carousel from "@components/Carousel/KeenSlider";
import RankingCarousel from "@components/Carousel/RankingCarousel";
import NewsList from "./NewList";
import Testimonial from "./Testimonial";
import PersonList from "./PersonList";

const ListingBlock: React.FC<listingQueryResult & componentStyleResult> = (
  props
) => {
  const {
    items,
    backgroundColor,
    contentType,
    variant,
    title,
    header,
    name,
    ...rest
  } = props;

  if (contentType === "person") {
    return <PersonList {...props} />;
  }
  if (contentType === "news") {
    return (
      <Section
        id={name}
        width={variant === "carousel" ? "full" : "l"}
        noPadding={variant === "carousel"}
        noProse
        {...rest}
        bg={backgroundColor}
      >
        {header && (
          <div className="typo typo-spacings  mt-12 mb-24 text-center">
            <RichText content={header} />
          </div>
        )}
        <NewsList {...props} />
      </Section>
    );
  }

  if (contentType === "testimonial") {
    return <Testimonial {...props} />;
  }

  if (contentType === "ranking") {
    return (
      <Section
        id={name}
        width="m"
        noProse
        noPadding
        {...rest}
        bg={backgroundColor}
      >
        <div className=" mx-auto relative text-secondary-medium">
          {header && (
            <div className="px-sides typo-spacings">
              <RichText content={header} />
            </div>
          )}

          <RankingCarousel rankingItems={items} />
        </div>
      </Section>
    );
  }

  return (
    <Section
      id={name}
      width="full"
      noProse
      noPadding
      {...rest}
      bg={backgroundColor}
    >
      {header && (
        <div className="typo-spacings mt-12 mb-24 text-center">
          <RichText content={header} />
        </div>
      )}

      <List.wrap columns={1} noGap={true} items={items} useKey="key">
        {(props) => {
          return (
            <Card.Wrap {...props} variant="horizontal" noLink={true}>
              <Card.Image
                showTitle
                half
                variant="fillContainer"
                className=" min-h-[350px] lg:min-h-[600px] garamondFont text-white"
              />
              <Card.Info variant="centerBox" className="max-w-[600px] mx-auto">
                <Card.Description className="mb-4 textBig" />
                <Card.Link className="text-primary" />
              </Card.Info>
            </Card.Wrap>
          );
        }}
      </List.wrap>
    </Section>
  );
};
export default ListingBlock;
