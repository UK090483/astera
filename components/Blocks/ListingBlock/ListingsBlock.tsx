import EventsList from "@components/Blocks/ListingBlock/Listings/Events/EventsList";
import Listing from "@components/Blocks/ListingBlock/Listings/Default/Listing";
import { ImageMetaResult, imageMeta } from "@lib/SanityImage/query";
import React from "react";
import PersonList from "./Listings/Persons/PersonList";
import TestimonialList from "./Listings/Testimonials/TestimonialList";
import { testimonialQuery } from "./Listings/Testimonials/testimaonialQuery";
import { TestimonialItemResult } from "./Listings/Testimonials/testimonialTypes";
import { EventsListItemQuery } from "./Listings/Events/EventsListQuery";
import {
  personItemQuery,
  PersonItemResult,
} from "./Listings/Persons/PersonListQuery";

export const listItemQuery = (locale: string) => {
  return `
...,
_id,
'title':coalesce(title_${locale},title),
'subTitle':coalesce(subTitle_${locale},subTitle),
'description':coalesce(description_${locale},description),
'slug':select(
  defined(pageType) && defined(pageType->slug_${locale}.current)  => pageType->slug_${locale}.current + '/' + coalesce(slug_${locale}.current,slug.current),
  defined(pageType) => pageType->slug.current + '/' +  coalesce(slug_${locale}.current,slug.current),
  slug.current
  ),
'featuredImage':featuredImage{${imageMeta}}
`;
};

export interface ListItemResult {
  title?: null | string;
  description?: null | string;
  subTitle?: null | string;
  slug?: null | string;
  featuredImage?: null | ImageMetaResult;
  _id: string;
  _updatedAt?: string;
}

export const listingBlockQuery = (locale: string) => `
_type == "listing" => {
  ...,
  'personItems': personItems[]->{${personItemQuery(locale)}},
  ${testimonialQuery(locale)},
  _type,
  _key,
  contentType,
  showTitle,
  variant,
  'filterItems':*[_type == "tag"]{'label':coalesce(name_${locale},name),'value':_id},
  'title':coalesce(title_${locale},title),
  'items': 
    select(
      type == 'custom' => customItems[]->{${listItemQuery(locale)}},
      contentType in ['event']=> *[_type == ^.contentType][]{${EventsListItemQuery(
        locale
      )}},
      contentType in ['documentations']=> *[ pageType._ref == "88e611ea-581e-48c4-b63c-13e1084acf4f" ][]{${listItemQuery(
        locale
      )}},
      type == 'contentType' => *[_type == ^.contentType ][]{${listItemQuery(
        locale
      )}}
      
      )
}
`;

export interface ListingBlogResult {
  _type: "listing";
  _key: string;
  items?: ListItemResult[];
  contentType?: "event" | "documentations" | "persons" | "testimonials";
  variant?: "grid" | "list" | "carousel";
  title?: string;
  filterItems?: { label: string; value: string }[];
  personItems?: PersonItemResult[] | null;
  testimonialItems?: TestimonialItemResult[] | null;
  customItems?: ListItemResult[];
  showTitle?: boolean;
  type?: "custom";
}

export interface ListingBlockProps extends ListingBlogResult {}

const ListingBlock: React.FC<ListingBlockProps> = (props) => {
  const {
    items,
    variant,
    title,
    contentType,
    filterItems,
    personItems,
    testimonialItems,
    showTitle,
    type,
  } = props;

  if (type !== "custom" && contentType === "testimonials") {
    return <TestimonialList items={testimonialItems || []} />;
  }

  if (type !== "custom" && contentType === "persons") {
    return (
      <PersonList title={showTitle ? title : null} items={personItems || []} />
    );
  }

  if (type !== "custom" && contentType === "event") {
    return (
      <EventsList
        filterItems={filterItems}
        items={items || []}
        accordion={true}
      />
    );
  }

  return (
    <Listing
      filterItems={contentType === "documentations" ? filterItems : undefined}
      title={showTitle ? title : null}
      variant={variant || "list"}
      items={type === "custom" ? items || [] : items || []}
    />
  );
};

export default ListingBlock;