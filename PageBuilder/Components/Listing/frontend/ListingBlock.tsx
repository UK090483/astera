import React from "react";
import { listingQueryResult } from "../listing.query";
import Section from "@components/Section/Section";
import { componentStyleResult } from "../../componentStyle";
import List from "@components/Lists/ListWrap";
import Card from "@components/Card/Card";
import RichText from "PageBuilder/RichText/frontend/RichText";
import { NewsCard } from "PageBuilder/ContentTypes/news/frontend/NewsCard";
import { PersonCard } from "PageBuilder/ContentTypes/Person/frontend/PersonCard";
import Carousel from "@components/Carousel/Carousel";
import RankingCarousel from "@components/Carousel/RankingCarousel";

const presetMap: Record<
  string,
  {
    cardWrap?: Partial<React.ComponentProps<typeof Card.Wrap>>;
    section?: React.ComponentProps<typeof Section>;
    listWrap?: Partial<React.ComponentProps<typeof List.wrap>>;
    cardInfo?: React.ComponentProps<typeof Card.Info>;
    cardImage?: React.ComponentProps<typeof Card.Image>;
    cardDescription?: React.ComponentProps<typeof Card.Description>;
  }
> = {
  default: {},
  news: {
    cardWrap: { className: "p-8 border-2 h-full", noLink: true },
    cardInfo: { className: "h-full justify-between" },
    listWrap: { variant: "grid", columns: 3 },
    cardDescription: { widthDate: true, small: true },
    section: { width: "l" },
  },
  news_carousel: {
    cardWrap: { className: "p-8 h-full border-2", noLink: true },
    cardInfo: { className: "h-full justify-between" },
    listWrap: { variant: "carousel" },
    section: { width: "full", noPadding: true },
    cardDescription: { widthDate: true, small: true },
  },
  custom: {
    cardWrap: { variant: "horizontal", noLink: true },
    section: { width: "full", noPadding: true },
    listWrap: { noGap: true, columns: 1 },
    cardInfo: { variant: "centerBox", className: "max-w-[600px] mx-auto" },
    cardImage: { showTitle: true, half: true },
  },
};

const presetList = (type: string) => {
  return presetMap[type] ? presetMap[type] : presetMap.default;
};

const ListingBlock: React.FC<listingQueryResult & componentStyleResult> = (
  props
) => {
  const { items, backgroundColor, contentType, variant, title, ...rest } =
    props;

  const contentTypeKey = contentType + (variant ? "_" + variant : "");

  const { listWrap, cardWrap, section, cardInfo, cardDescription } =
    presetList(contentTypeKey);

  if (contentType === "person") {
    return (
      <Section
        width="l"
        noProse
        noPadding
        {...rest}
        bg={backgroundColor}
        {...section}
      >
        {title && (
          <div className="typo typo-spacings  mt-12 mb-24 text-center">
            <RichText content={title} />
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
      <Section width="l" noProse {...rest} bg={backgroundColor} {...section}>
        {title && (
          <div className="typo typo-spacings  mt-12 mb-24 text-center">
            <RichText content={title} />
          </div>
        )}
        <List.wrap
          hasLoadMore={variant !== "carousel"}
          contentType="news"
          variant={variant === "carousel" ? "carousel" : "grid"}
          items={items}
          useKey="key"
        >
          {(props) => {
            return <NewsCard {...props} />;
          }}
        </List.wrap>
      </Section>
    );
  }

  if (contentType === "testimonial") {
    console.log(props);

    return (
      <Section
        width="l"
        noProse
        noPadding
        {...rest}
        bg={backgroundColor}
        {...section}
      >
        <div className=" bg-secondary max-w-3xl mx-auto relative pt-8 text-secondary-medium">
          <div className=" top-0 left-12 -translate-y-9 text-9xl garamondFont text-white  w-fit h-fit absolute">
            ”
          </div>

          {title && (
            <div className="mt-12 mb-12 px-12 typo-invert">
              <RichText content={title} />
            </div>
          )}

          <Carousel>
            {items.map((item) => (
              <div
                key={item.key}
                className=" typo-invert typo-spacings text-secondary-medium  px-12 "
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
        width="m"
        noProse
        noPadding
        {...rest}
        bg={backgroundColor}
        {...section}
      >
        <div className=" mx-auto relative pt-8 text-secondary-medium">
          {title && (
            <div className="mt-12 mb-12 px-12 typo-invert">
              <RichText content={title} />
            </div>
          )}

          <RankingCarousel rankingItems={items} />
        </div>
      </Section>
    );
  }

  return (
    <Section
      width="l"
      noProse
      noPadding
      {...rest}
      bg={backgroundColor}
      {...section}
    >
      {title && (
        <div className="typo-spacings mt-12 mb-24 text-center">
          <RichText content={title} />
        </div>
      )}

      <List.wrap {...listWrap} items={items} useKey="key">
        {(props) => {
          return (
            <Card.Wrap {...props} {...cardWrap}>
              <Card.Image
                showTitle
                half
                variant="fillContainer"
                className=" min-h-[350px] lg:min-h-[600px] garamondFont text-white"
              />
              <Card.Info {...cardInfo}>
                <Card.Description
                  {...cardDescription}
                  className="mb-4 textBig"
                />
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
