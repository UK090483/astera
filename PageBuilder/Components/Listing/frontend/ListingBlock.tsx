import React from "react";
import { listingQueryResult } from "../listing.query";
import Section from "@components/Section/Section";
import { componentStyleResult } from "../../componentStyle";
import List from "@components/Lists/ListWrap";
import Card from "@components/Card/Card";
import RichText from "PageBuilder/RichText/frontend/RichText";
import { NewsCard } from "PageBuilder/ContentTypes/news/frontend/NewsCard";
import { PersonCard } from "PageBuilder/ContentTypes/Person/frontend/PersonCard";

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

      <List.wrap {...listWrap} items={items} useKey="key">
        {(props) => {
          return (
            <Card.Wrap {...props} {...cardWrap}>
              <Card.Image
                showTitle
                half
                variant="fillContainer"
                className=" min-h-[350px]  lg:min-h-[600px] "
              />
              <Card.Info {...cardInfo}>
                <Card.Description {...cardDescription} className="mb-4" />
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
