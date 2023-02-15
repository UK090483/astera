import { seoQuery } from "../../Objects/Seo/Seo.query";
import navigationQuery from "../../Navigation/navigation.query";

import { BaseContentTypeProjection } from "../helper";
import { editorQuery } from "../Base/Editor/editor.query";
import { footerQuery } from "@components/Layout/Footer/Footer.query";
import { footerResult } from "@components/Layout/Footer/Footer.query";
import { NavigationResult } from "../../Navigation/navigation.types";
import { SeoQueryResult } from "../../Objects/Seo/Seo.query";
import { EditorResult } from "../Base/Editor/editor.query";
import type { BaseContentTypeResult } from "../helper";
import {
  testimonialItem,
  testimonialItemQuery,
} from "PageBuilder/Objects/Testimonial/testimonialItem.query";
import { SLUG_PROJECTION } from "PageBuilder/constants";
import {
  ListingItem,
  listingItemProjection,
} from "PageBuilder/Components/Listing/listing.query";

export const personQuery = (locale?: string) => `
_type,
${BaseContentTypeProjection(locale)}
${navigationQuery(locale)}
'body':body[]{${editorQuery(locale)}},
'accomplishments':accomplishments[]{${testimonialItemQuery(locale)}},
...(*[_id=='baseConfig'][0].personListingPage{
  'personListingLink':{
 ...(page->{ 'slug' :${SLUG_PROJECTION(locale)}}),
 onPageLink,
  }
}),
${seoQuery(locale)}
${footerQuery(locale)},
'prevItem': *[_type == 'person' && ^.orderRank > orderRank ] | order(orderRank desc) [0] {title,'slug' :${SLUG_PROJECTION(
  locale
)}},
'nextItem': *[_type == 'person' && ^.orderRank < orderRank ] | order(orderRank asc) [0] {title,'slug' :${SLUG_PROJECTION(
  locale
)}},
'newsItems': *[_type == 'news' &&  category in [ "financeDeal","privateEquityDeal"]  && references(^._id) ][]{
  ${listingItemProjection(locale)}
}

`;

export type PersonResult = BaseContentTypeResult &
  NavigationResult &
  SeoQueryResult & {
    _type: "person";
    accomplishments: testimonialItem[];
    personListingLink?: { slug?: string; onPageLink?: string };
    prevItem?: { slug?: string; title?: string };
    nextItem?: { slug?: string; title?: string };
    newsItems?: ListingItem[] | null;
    body: EditorResult;
    slug: string;
  } & footerResult;
