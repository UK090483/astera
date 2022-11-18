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
import { testimonialItem } from "PageBuilder/Objects/Testimonial/testimonialItem.type";

export const personQuery = (locale?: string) => `
_type,
${BaseContentTypeProjection(locale)}
${navigationQuery(locale)}
'body':body[]{${editorQuery(locale)}},
accomplishments,
${seoQuery(locale)}
${footerQuery(locale)}
`;

export type PersonResult = BaseContentTypeResult &
  NavigationResult &
  SeoQueryResult & {
    _type: "person";
    accomplishments: testimonialItem[];
    body: EditorResult;
    slug: string;
  } & footerResult;
