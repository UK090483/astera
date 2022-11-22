import buildQuery from "../../lib/listingBuilder/buildQuery";
import { ImageResult, IMAG_PROJECTION, SLUG_PROJECTION } from "../../constants";
import { localizedQueryFn, localizeValue } from "../../helper/withLocalization";
import {
  colorResult,
  componentStyleProjection,
  componentStyleResult,
} from "../componentStyle";
import { items } from "./listing.items";
import {
  linkProjection,
  linkResult,
} from "PageBuilder/Objects/link/link.query";
import { headerRichTextQueryResult } from "PageBuilder/RichText/headerRichText.query";

export type ListingItem = {
  key: string;
  title?: string;
  name?: string;
  mainImage?: ImageResult;
  slug?: string;
  description?: string;
  bgColor?: colorResult;
  startDate?: string;
  link?: linkResult;
  category?: string;
  subTitle?: string;
};

type queryProps = {
  locale?: string;
};

const listingQuery: localizedQueryFn = (locale) =>
  buildQuery(
    items,
    `
    bgColor,
    'key': coalesce(_id,_key),
    'slug': ${SLUG_PROJECTION(locale)},
    'link': link{${linkProjection(locale)}},
    ${localizeValue("title", locale)},
    ${localizeValue("description", locale)},
    'mainImage':mainImage{${IMAG_PROJECTION}},
    startDate,
    category,
    ${localizeValue("subTitle", locale)},
    
  `
  );

export const listProjection: localizedQueryFn = (locale) => `
_type == 'listing'=>{
  _type,
  _key,
${listingQuery(locale)}
${componentStyleProjection}
title,
},
`;

export type listingQueryResult = {
  _type: "listing";
  _key: string;
  contentType: string;
  items: ListingItem[];
  title?: headerRichTextQueryResult | null;
  variant: string;
} & componentStyleResult;