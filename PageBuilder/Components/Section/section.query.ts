import { localizedQueryFn, localizeValue } from "../../helper/withLocalization";

import { defaultRichTextQuery } from "../../RichText/defaultRichText.query";
import { ImageResult, IMAG_PROJECTION } from "../../constants";
import {
  componentStyleProjection,
  componentStyleResult,
} from "../componentStyle";
import {
  headerRichTextQuery,
  headerRichTextQueryResult,
} from "PageBuilder/RichText/headerRichText.query";

export const sectionBlockQuery: localizedQueryFn = (locale) => `
_type == "section" => {
  _key,
  _type,
  title,
  type,
  headerPosition,
  textDirection,
  'image':image{${IMAG_PROJECTION}},
  'header':(coalesce(header_${locale},header))[]{${headerRichTextQuery(
  locale
)}},
  'content':(coalesce(content_${locale},content))[]{${defaultRichTextQuery(
  locale
)}},
 ${componentStyleProjection}
  },
`;

export type SectionResult = {
  title?: string;
  textDirection?: "left" | "center" | "right";
  content?: null | any;
  bgImage?: ImageResult;
  headerPosition?: "l" | "r" | "l-1/2" | null;
  image?: ImageResult;
  type?: "m" | "l" | "s";
  header?: headerRichTextQueryResult;
  _key: string;
} & componentStyleResult;

export default sectionBlockQuery;
