import {
  headerRichTextQuery,
  headerRichTextQueryResult,
} from "../../RichText/headerRichText.query";
import { ImageResult, IMAG_PROJECTION } from "../../constants";
import { localizedQueryFn, localizeValue } from "../../helper/withLocalization";

export const heroQueryProjection: localizedQueryFn = (locale) => `
_type == 'hero'=>{
   _key,
   _type,
    'image': coalesce(image,*[_id=='baseConfig'][0].defaultHero){${IMAG_PROJECTION}},
    'content':content[]{${headerRichTextQuery(locale)}},
    'news':*[_type == 'news'] | order( startDate asc)[0...8] {
      _id,
       ${localizeValue("title", locale)}},
},
`;
export type heroResult = {
  _type: "hero";
  _key: string;
  image?: ImageResult;
  content: headerRichTextQueryResult;

  news?: { _id: string; title?: string }[];
};
