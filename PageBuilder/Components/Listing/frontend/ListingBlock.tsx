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
    return (
      <Section
        id={name}
        width="l"
        noProse
        noPadding
        {...rest}
        bg={backgroundColor}
      >
        {header && (
          <div className="typo typo-spacings  mt-12 mb-24 text-center">
            <RichText content={header} />
          </div>
        )}
        <List.wrap items={items} useKey="key">
          {(props) => <PersonCard {...props} />}
        </List.wrap>
      </Section>
    );
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
        {/* <List.wrap
          hasLoadMore={variant !== "carousel"}
          contentType="news"
          variant={variant === "carousel" ? "carousel" : "grid"}
          items={items}
          useKey="key"
        >
          {(props) => {
            return <NewsCard {...props} />;
          }}
        </List.wrap> */}
      </Section>
    );
  }

  if (contentType === "testimonial") {
    return (
      <Section id={name} width="l" noProse {...rest} bg={backgroundColor}>
        <div className=" bg-secondary max-w-3xl mx-auto relative pt-8 text-secondary-medium">
          <div className=" top-0 left-12 -translate-y-9 text-9xl garamondFont text-white  w-fit h-fit absolute">
            ”
          </div>

          {header && (
            <div className="mt-12 mb-12 px-12 typo-invert">
              <RichText content={header} />
            </div>
          )}

          <Carousel dots={true}>
            {items.map((item) => (
              <div
                key={item.key}
                className=" typo-bright typo-spacings px-12 pb-12 "
              >
                <RichText content={item.content} />
              </div>
            ))}
          </Carousel>
        </div>
      </Section>
    );
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
