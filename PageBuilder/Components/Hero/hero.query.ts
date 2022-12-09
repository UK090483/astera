import {
  headerRichTextQuery,
  headerRichTextQueryResult,
} from "../../RichText/headerRichText.query";
import { ImageResult, IMAG_PROJECTION, SLUG_PROJECTION } from "../../constants";
import { localizedQueryFn, localizeValue } from "../../helper/withLocalization";

export const heroQueryProjection: localizedQueryFn = (locale) => `
_type == 'hero'=>{
   _key,
   _type,
    'image': select( 
      defined(image) => image,
      ^._type == 'news' => coalesce(*[_id=='baseConfig'][0].defaultNewsHero,*[_id=='baseConfig'][0].defaultHero),
      ^._type == 'person' => coalesce(*[_id=='baseConfig'][0].defaultNewsPerson,*[_id=='baseConfig'][0].defaultHero),
      *[_id=='baseConfig'][0].defaultHero
          ){${IMAG_PROJECTION}},
    'content':content[]{${headerRichTextQuery(locale)}},
    'news': select( newsTicker => *[_type == 'news'] | order( startDate asc)[0...8] {
      _id,
       ${localizeValue("title", locale)},
       'slug': ${SLUG_PROJECTION(locale)},
      },
      )
},
`;
export type heroResult = {
  _type: "hero";
  _key: string;
  image?: ImageResult;
  content: headerRichTextQueryResult;
  newsTicker?: boolean;
  news?: { _id: string; title?: string; slug?: string }[];
};
