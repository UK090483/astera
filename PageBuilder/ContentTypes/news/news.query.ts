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
import { SLUG_PROJECTION } from "PageBuilder/constants";

export const newsQuery = (locale?: string) => `
_type,
${BaseContentTypeProjection(locale)}
${navigationQuery(locale)}
'body':body[]{${editorQuery(locale)}},
startDate,
...(*[_id=='baseConfig'][0].newsListingPage{
  'newsListingLink':{
 ...(page->{ 'slug' :${SLUG_PROJECTION(locale)}}),
 onPageLink,
  }
}),
${seoQuery(locale)}
${footerQuery(locale)},
category,
`;

export type NewsResult = BaseContentTypeResult &
  NavigationResult &
  SeoQueryResult & {
    _type: "news";
    startDate?: string;
    category?: string;
    newsListingLink?: { slug?: string; onPageLink?: string };
    body: EditorResult;
    slug: string;
  } & footerResult;
